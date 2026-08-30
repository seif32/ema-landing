import { GoogleGenerativeAI } from "@google/generative-ai";
import buildKnowledgeBase from "./knowledgeBase";
import { USAGE_GUIDELINES, POLICY_AND_TERMS } from "./legacyPolicyText";

const apiKeys = [
  import.meta.env.VITE_GEMINI_KEY_1,
  import.meta.env.VITE_GEMINI_KEY_2,
  // import.meta.env.VITE_GEMINI_KEY_3,
].filter(Boolean);

/**
 * 🎲 Get random API key for load balancing
 */
const getRandomApiKey = () => {
  if (apiKeys.length === 0) {
    console.error("❌ No Gemini API keys found! Check your .env file");
    return null;
  }
  const randomIndex = Math.floor(Math.random() * apiKeys.length);
  return apiKeys[randomIndex];
};

/**
 * 🤖 Generate AI response
 */
const generateText = async (prompt) => {
  try {
    const apiKey = getRandomApiKey();
    if (!apiKey) {
      throw new Error("No API key available");
    }

    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    return text;
  } catch (error) {
    console.error("❌ Error generating AI response:", error);
    throw new Error("Failed to generate AI response. Please try again.");
  }
};

/**
 * 📝 Build the chatbot prompt.
 *
 * Product knowledge is GENERATED from src/content (the same source the site
 * renders), so the bot and the pages cannot drift apart. Only the verbatim
 * legal wording is carried over as a fixed string.
 */
const createPrompt = (userQuery) => {
  return [
    "You are a helpful assistant for eMalyami (eMa).",
    "Decide whether the user's query is relevant to eMalyami and its modules.",
    'If it is NOT relevant, respond with ONLY the phrase "This question is not relevant".',
    "If it IS relevant, answer it.",
    "Only state things you are certain of from the information below. If you are unsure, give only what is available — never invent details, prices or links.",
    "When the user asks for a link to a module, return the URL as a clickable hyperlink labelled with the module name.",
    "",
    `The user has asked: "${userQuery}"`,
    "",
    buildKnowledgeBase(),
    "",
    USAGE_GUIDELINES,
    "",
    POLICY_AND_TERMS,
  ].join("\n");
};

/**
 * 🔗 Format links in bot responses
 */
const formatLinks = (text) => {
  const urlPattern = /(https?:\/\/[^\s]+)/g;

  const replaceWithAnchorTag = (url) => {
    // Clean up URL endings
    if (url.endsWith(".") || url.endsWith(")")) {
      url = url.slice(0, -1);
    }

    // Handle specific URL patterns (same logic as Angular)
    if (url.includes("mall")) {
      return `<a rel="noreferrer" target="_blank" href="${url}">eMaMall</a>`;
    } else if (url.includes("ematuma")) {
      return `<a rel="noreferrer" target="_blank" href="${url}">eMaTuma</a>`;
    } else if (url.includes("emafund") || url.includes("crowdfunding")) {
      return `<a rel="noreferrer" target="_blank" href="${url}">eMaFunding</a>`;
    } else if (url.includes("posbo") || url.includes("pos")) {
      return `<a rel="noreferrer" target="_blank" href="${url}">eMaPos</a>`;
    } else if (url.includes("emasave")) {
      return `<a rel="noreferrer" target="_blank" href="${url}">eMaSave</a>`;
    } else if (url.includes("emaservices") || url.includes("emaserve")) {
      return `<a rel="noreferrer" target="_blank" href="${url}">eMaServe</a>`;
    } else if (url.includes("eyuchat")) {
      return `<a rel="noreferrer" target="_blank" href="${url}">Join a Meeting</a>`;
    } else {
      return `<a rel="noreferrer" target="_blank" href="${url}">eMalyami</a>`;
    }
  };

  return text.replace(urlPattern, replaceWithAnchorTag);
};

// 📤 Export all functions
export { generateText, createPrompt, formatLinks };
