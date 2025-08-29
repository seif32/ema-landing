import { api } from "./api";

/**
 * 📰 NEWS API SERVICE
 * Centralized API calls for news/posts management using your enhanced API utility
 * Handles all social media posts, comments, and interactions
 * Uses exact endpoints from your Angular backend
 */
const newsApi = {
  /**
   * 📥 GET ALL POSTS
   * Fetches the complete list of news posts from server
   * Perfect for news feeds, blog listings, social media timelines
   * Example: const posts = await newsApi.getAll();
   */
  getAll: async (options = {}) => {
    try {
      return await api.get("/super/social/getAllPosts", {
        ...options,
      });
    } catch (error) {
      console.error("Failed to fetch posts:", {
        status: error.status,
        method: error.method,
        url: error.url,
        responseTime: error.responseTime,
      });
      throw error;
    }
  },

  /**
   * 🎯 GET SINGLE POST BY ID
   * Fetches details of one specific post using its unique ID
   * Great for post detail pages, edit forms, or showing post information
   * Example: const post = await newsApi.getById(5);
   */
  getById: async (id, options = {}) => {
    if (!id) {
      throw new Error("Post ID is required");
    }

    try {
      return await api.get(`/super/social/getPost/${id}`, options);
    } catch (error) {
      console.error(`Failed to fetch post ${id}:`, error.details);
      throw error;
    }
  },

  /**
   * 💬 GET COMMENTS FOR POST
   * Retrieves all comments for a specific post
   * Used for comment sections, post interactions, engagement metrics
   * Example: const comments = await newsApi.getComments(postId);
   */
  getComments: async (postId, options = {}) => {
    if (!postId) {
      throw new Error("Post ID is required to fetch comments");
    }

    try {
      return await api.get(`/super/social/getAllComments/${postId}`, options);
    } catch (error) {
      console.error(
        `Failed to fetch comments for post ${postId}:`,
        error.details
      );
      throw error;
    }
  },

  /**
   * ➕ ADD COMMENT TO POST
   * Adds a new comment to a specific post
   * Required: name, comment (both are mandatory)
   * Example: const newComment = await newsApi.addComment(postId, {name: "John", comment: "Great post!"});
   */
  addComment: async (postId, commentData, options = {}) => {
    // Input validation based on your backend requirements
    if (!postId) {
      throw new Error("Post ID is required");
    }
    if (!commentData.name || !commentData.comment) {
      throw new Error("Name and comment are both required");
    }

    try {
      return await api.post(
        `/super/social/addComment/${postId}`,
        commentData,
        options
      );
    } catch (error) {
      console.error(`Failed to add comment to post ${postId}:`, {
        data: commentData,
        error: error.details,
      });
      throw error;
    }
  },

  /**
   * ❤️ LIKE/UNLIKE POST
   * Toggles like status for a post (if this endpoint exists)
   * Example: await newsApi.toggleLike(postId);
   */
  // toggleLike: async (postId, options = {}) => {
  //   if (!postId) {
  //     throw new Error("Post ID is required");
  //   }

  //   try {
  //     return await api.post(`/super/social/toggleLike/${postId}`, {}, options);
  //   } catch (error) {
  //     console.error(`Failed to toggle like for post ${postId}:`, error.details);
  //     throw error;
  //   }
  // },

  /**
   * 📤 SHARE POST
   * Handles post sharing functionality
   * Example: await newsApi.sharePost(postId);
   */
  // sharePost: async (postId, options = {}) => {
  //   if (!postId) {
  //     throw new Error("Post ID is required");
  //   }

  //   try {
  //     return await api.post(`/super/social/sharePost/${postId}`, {}, options);
  //   } catch (error) {
  //     console.error(`Failed to share post ${postId}:`, error.details);
  //     throw error;
  //   }
  // },
};

export default newsApi;
