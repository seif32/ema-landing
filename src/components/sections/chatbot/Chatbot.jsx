import { useChatbot } from "@/hooks/useChatbot";
import {
  MessageCircle,
  Send,
  Loader2,
  Minimize2,
  X,
  Bot,
  User,
} from "lucide-react";

const Chatbot = () => {
  const {
    chatHistory,
    loading,
    prompt,
    setPrompt,
    isMinimized,
    sendMessage,
    toggleChat,
    clearChat,
    messagesEndRef,
  } = useChatbot();

  const handleSubmit = (e) => {
    e.preventDefault();
    sendMessage();
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="fixed bottom-4 left-4 z-50">
      {/* 🤖 Chat Window */}
      {!isMinimized && (
        <div className="bg-white rounded-lg shadow-2xl w-80 h-96 flex flex-col mb-4 border border-gray-200">
          {/* Header */}
          <div className="bg-[#AF6553] text-white p-4 rounded-t-lg flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Bot className="h-5 w-5" />
              <h3 className="font-semibold">eMa Assistant</h3>
            </div>
            <div className="flex items-center space-x-2">
              <button
                onClick={clearChat}
                className="text-white/80 hover:text-white transition-colors"
                title="Clear chat"
              >
                <X className="h-4 w-4" />
              </button>
              <button
                onClick={toggleChat}
                className="text-white/80 hover:text-white transition-colors"
                title="Minimize"
              >
                <Minimize2 className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-gray-50">
            {chatHistory.length === 0 && (
              <div className="text-center text-gray-500 py-8">
                <Bot className="h-12 w-12 mx-auto mb-3 text-gray-400" />
                <p>Hi! I'm your eMa assistant.</p>
                <p className="text-sm">How can I help you today?</p>
              </div>
            )}

            {chatHistory.map((message, index) => (
              <div
                key={index}
                className={`flex ${
                  message.from === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-lg ${
                    message.from === "user"
                      ? "bg-[#AF6553] text-white"
                      : "bg-white text-gray-800 border border-gray-200"
                  }`}
                >
                  <div className="flex items-start space-x-2">
                    {message.from === "bot" && (
                      <Bot className="h-4 w-4 mt-0.5 text-[#AF6553] flex-shrink-0" />
                    )}
                    {message.from === "user" && (
                      <User className="h-4 w-4 mt-0.5 text-white flex-shrink-0" />
                    )}
                    <div className="flex-1">
                      {message.htmlMessage ? (
                        <div
                          dangerouslySetInnerHTML={{
                            __html: message.htmlMessage,
                          }}
                          className="prose prose-sm max-w-none"
                        />
                      ) : (
                        <p className="text-sm">{message.message}</p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {loading && (
              <div className="flex justify-start">
                <div className="bg-white text-gray-800 border border-gray-200 p-3 rounded-lg">
                  <div className="flex items-center space-x-2">
                    <Bot className="h-4 w-4 text-[#AF6553]" />
                    <Loader2 className="h-4 w-4 animate-spin text-[#AF6553]" />
                    <span className="text-sm">Thinking...</span>
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <form
            onSubmit={handleSubmit}
            className="p-4 border-t border-gray-200"
          >
            <div className="flex space-x-2">
              <input
                type="text"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask me anything about eMa..."
                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#AF6553] focus:border-transparent text-sm"
                disabled={loading}
              />
              <button
                type="submit"
                disabled={loading || !prompt.trim()}
                className="bg-[#AF6553] text-white p-2 rounded-lg hover:bg-[#844b3d] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <Send className="h-4 w-4" />
              </button>
            </div>
          </form>
        </div>
      )}

      {/* 🔘 Chat Toggle Button */}
      <button
        onClick={toggleChat}
        className="bg-[#AF6553] text-white p-3 rounded-full shadow-lg hover:bg-[#844b3d] transition-colors"
        title={isMinimized ? "Open chat" : "Close chat"}
      >
        {isMinimized ? (
          <MessageCircle className="h-6 w-6" />
        ) : (
          <Minimize2 className="h-6 w-6" />
        )}
      </button>
    </div>
  );
};

export default Chatbot;
