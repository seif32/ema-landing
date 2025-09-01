const BLOG_API_URL = "https://crawlingblog.emalyami.com/get-blog";

const chatbotApi = {
  /**
   * 📚 Fetch blog data for chatbot context
   */
  getBlogData: async () => {
    try {
      const response = await fetch(BLOG_API_URL);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      console.log("📚 Blog data fetched successfully");
      return data;
    } catch (error) {
      console.error("❌ Error fetching blog data:", error);
      throw error;
    }
  },

  /**
   * 🔄 Combine blog data into text
   */
  combineBlogData: (blogData) => {
    if (!Array.isArray(blogData)) return "";
    return blogData.map((page) => page.content || "").join("\n\n");
  },
};

export default chatbotApi;
