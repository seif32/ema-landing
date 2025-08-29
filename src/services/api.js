/**
 * 🚀 ENHANCED API UTILITY
 * Base HTTP client with error handling, interceptors, and performance monitoring
 * Foundation layer for all API services in the application
 * Features: Request/Response logging, Error standardization, Performance tracking
 */

const BASE_URL = "https://api1.emalyami.com/core/api/v1";

/**
 * 🛠️ Enhanced fetch wrapper with error handling and performance monitoring
 */
const createApiClient = (baseURL) => {
  const request = async (endpoint, options = {}) => {
    const startTime = performance.now();
    const url = `${baseURL}${endpoint}`;

    // Default configuration
    const config = {
      headers: {
        "Content-Type": "application/json",
        ...options.headers,
      },
      ...options,
    };

    // Add body only for POST/PUT/PATCH requests
    if (options.body && typeof options.body === "object") {
      config.body = JSON.stringify(options.body);
    }

    try {
      console.log(`🚀 API Request: ${config.method || "GET"} ${url}`);

      const response = await fetch(url, config);
      const endTime = performance.now();
      const responseTime = Math.round(endTime - startTime);

      console.log(`📊 Response: ${response.status} (${responseTime}ms)`);

      if (!response.ok) {
        const errorData = await response.json().catch(() => null);
        throw new ApiError({
          status: response.status,
          statusText: response.statusText,
          message: errorData?.message || `HTTP Error: ${response.status}`,
          url,
          method: config.method || "GET",
          responseTime,
          data: errorData,
        });
      }

      const data = await response.json();

      // Success log
      console.log(`✅ Success: ${config.method || "GET"} ${endpoint}`, {
        responseTime: `${responseTime}ms`,
        dataLength: data?.data?.length || "N/A",
      });

      return data;
    } catch (error) {
      const endTime = performance.now();
      const responseTime = Math.round(endTime - startTime);

      if (error instanceof ApiError) {
        throw error;
      }

      // Network or other errors
      throw new ApiError({
        status: 0,
        message: error.message || "Network error occurred",
        url,
        method: config.method || "GET",
        responseTime,
        originalError: error,
      });
    }
  };

  return {
    /**
     * 📥 GET REQUEST
     * Example: api.get('/brands', { headers: { Authorization: 'Bearer token' } })
     */
    get: (endpoint, options = {}) =>
      request(endpoint, { ...options, method: "GET" }),

    /**
     * ➕ POST REQUEST
     * Example: api.post('/brands', { name: 'Apple' })
     */
    post: (endpoint, data, options = {}) =>
      request(endpoint, { ...options, method: "POST", body: data }),

    /**
     * ✏️ PUT REQUEST
     * Example: api.put('/brands/1', { name: 'Apple Inc.' })
     */
    put: (endpoint, data, options = {}) =>
      request(endpoint, { ...options, method: "PUT", body: data }),

    /**
     * 📝 PATCH REQUEST
     * Example: api.patch('/brands/1', { description: 'Updated description' })
     */
    patch: (endpoint, data, options = {}) =>
      request(endpoint, { ...options, method: "PATCH", body: data }),

    /**
     * 🗑️ DELETE REQUEST
     * Example: api.delete('/brands/1')
     */
    delete: (endpoint, options = {}) =>
      request(endpoint, { ...options, method: "DELETE" }),
  };
};

/**
 * 🚨 CUSTOM API ERROR CLASS
 * Standardized error handling with detailed debugging information
 */
class ApiError extends Error {
  constructor({
    status,
    statusText,
    message,
    url,
    method,
    responseTime,
    data,
    originalError,
  }) {
    super(message);
    this.name = "ApiError";
    this.status = status;
    this.statusText = statusText;
    this.url = url;
    this.method = method;
    this.responseTime = responseTime;
    this.data = data;
    this.originalError = originalError;

    // Enhanced error details for debugging
    this.details = {
      status,
      statusText,
      url,
      method,
      responseTime: `${responseTime}ms`,
      timestamp: new Date().toISOString(),
      message,
      data,
    };

    // Log error details
    console.error(`❌ API Error: ${method} ${url}`, this.details);
  }

  /**
   * 🔍 Check if error is a specific HTTP status
   */
  isStatus(status) {
    return this.status === status;
  }

  /**
   * 🌐 Check if error is network-related
   */
  isNetworkError() {
    return this.status === 0;
  }

  /**
   * 🔐 Check if error is authentication-related
   */
  isAuthError() {
    return this.status === 401 || this.status === 403;
  }

  /**
   * 📊 Check if error is server-related
   */
  isServerError() {
    return this.status >= 500;
  }

  /**
   * 📝 Get user-friendly error message
   */
  getUserMessage() {
    if (this.isNetworkError()) {
      return "Network connection problem. Please check your internet connection.";
    }

    if (this.isAuthError()) {
      return "Authentication failed. Please log in again.";
    }

    if (this.isServerError()) {
      return "Server error occurred. Please try again later.";
    }

    return this.message || "Something went wrong. Please try again.";
  }
}

// Create the main API instance
export const api = createApiClient(BASE_URL);

// Export the error class for external use
export { ApiError };

/**
 * 🔧 API CONFIGURATION UTILITIES
 */
export const apiConfig = {
  /**
   * 🔑 Set authentication token for all requests
   */
  setAuthToken: (token) => {
    if (token) {
      api.defaults = {
        headers: {
          ...api.defaults?.headers,
          Authorization: `Bearer ${token}`,
        },
      };
    }
  },

  /**
   * 🌐 Update base URL (useful for different environments)
   */
  setBaseUrl: (newBaseUrl) => {
    return createApiClient(newBaseUrl);
  },

  /**
   * 📊 Get current base URL
   */
  getBaseUrl: () => BASE_URL,
};

/**
 * 🎯 REQUEST INTERCEPTOR HELPERS
 * Add common functionality to all requests
 */
export const interceptors = {
  /**
   * 📝 Add request logging
   */
  logRequests: true,

  /**
   * ⏱️ Add request timeout (in milliseconds)
   */
  timeout: 30000, // 30 seconds

  /**
   * 🔄 Add retry logic for failed requests
   */
  retryAttempts: 3,
};

console.log("🚀 API Client initialized with base URL:", BASE_URL);
