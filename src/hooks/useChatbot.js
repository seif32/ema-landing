import { useState, useEffect, useRef } from "react";
import {
  generateText,
  createPrompt,
  formatLinks,
} from "@/services/geminiService";

export const useChatbot = () => {
  const [chatHistory, setChatHistory] = useState([]);
  const [loading, setLoading] = useState(false);
  const [prompt, setPrompt] = useState("");
  const [isMinimized, setIsMinimized] = useState(true);

  const messagesEndRef = useRef(null);

  // 📜 Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    scrollToBottom();
  }, [chatHistory]);

  const scrollToBottom = () => {
    setTimeout(() => {
      messagesEndRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "end",
      });
    }, 100);
  };

  /**
   * 📤 Send message to AI
   */
  const sendMessage = async () => {
    if (!prompt.trim() || loading) return;

    const userMessage = prompt.trim();
    setPrompt("");
    setLoading(true);

    // Add user message to chat (simple object, no types!)
    setChatHistory((prev) => [
      ...prev,
      {
        from: "user",
        message: userMessage,
        timestamp: new Date().toISOString(),
      },
    ]);

    try {
      // Create enhanced prompt with eMalyami context
      const enhancedPrompt = createPrompt(userMessage.toLowerCase());

      // Get AI response
      const aiResponse = await generateText(enhancedPrompt);

      let botMessage;

      if (aiResponse.toLowerCase().includes("not relevant")) {
        // Not relevant response
        botMessage = {
          from: "bot",
          message:
            "Please contact customer service via these emails: eMaCs0001@emalyami.com and eMaCs0002@emalyami.com.",
          timestamp: new Date().toISOString(),
        };
      } else {
        // Format links in response
        const formattedResponse = formatLinks(aiResponse);
        botMessage = {
          from: "bot",
          message: aiResponse,
          htmlMessage: formattedResponse,
          timestamp: new Date().toISOString(),
        };
      }

      setChatHistory((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error("Chatbot error:", error);
      const errorMessage = {
        from: "bot",
        message:
          "I'm sorry, I'm having trouble responding right now. Please try again later.",
        timestamp: new Date().toISOString(),
      };
      setChatHistory((prev) => [...prev, errorMessage]);
    } finally {
      setLoading(false);
    }
  };

  const toggleChat = () => setIsMinimized(!isMinimized);
  const clearChat = () => setChatHistory([]);

  return {
    chatHistory,
    loading,
    prompt,
    setPrompt,
    isMinimized,
    sendMessage,
    toggleChat,
    clearChat,
    messagesEndRef,
  };
};
