import React, { useState, useRef, useEffect } from 'react';
import { ChevronUp, ChevronDown, SendHorizonal } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import modelosaurusLogo from "../assets/modelosaurus.png";
import botIcon from '../assets/robot.png'
import userIcon from '../assets/usericon.png'


const getContrastColor = (hexColor) => {
  // Remove # if present
  const hex = hexColor.replace('#', '');
  
  // Convert hex to RGB
  const r = parseInt(hex.substr(0, 2), 16);
  const g = parseInt(hex.substr(2, 2), 16);
  const b = parseInt(hex.substr(4, 2), 16);
  
  // Calculate perceived brightness (YIQ formula)
  const brightness = (r * 0.299 + g * 0.587 + b * 0.114);
  
  // Return white for dark colors and black for light colors
  return brightness < 150 ? '#ffffff' : '#000000';
};

const ModelosaurusChatbot = ({
  // Appearance props
  headerColor = '#6419E6', // Default primary color
  chatBubbleUserColor = '#F000B8', // Default accent color
  chatBubbleBotColor = '#6419E6', // Default primary color
  fontSize = 16,
  borderRadius = 10,
  fontFamily = 'sans-serif',
  showBotIcon = true,
  showUserIcon = true,
  botIconUrl = "", // Default robot icon
  userIconUrl = "", // Default user icon
  titleText = 'Chat with AI',
  initialMessage = 'Hello! How can I assist you today?',

  //Npm package prop
  apiUrl = "https://kodiak-viable-supposedly.ngrok-free.app", //will replace with ngrok later

  // LLM props
  llm = 'llama-3.2-b', // Default LLM
  temperature = 30, // Default temperature (0.3)
  maxTokens = 500, // Default max tokens
  modelosaurusKey = '', // Required for API access
  chatbotId = '',

  // Custom hooks
  onMessageSent = () => { },
  onMessageReceived = () => { },

  // Advanced options
  customCSS = '',
  enableVectorSearch = true,
  enableStreaming = true,
  demoMode = false,
}) => {
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [chat, setChat] = useState([
    {
      sender: 'bot',
      message: initialMessage,
    },
  ]);
  const [isExpanded, setIsExpanded] = useState(false);
  const chatEndRef = useRef(null);
  const [vectorStoreUrl, setVectorStoreUrl] = useState(null)

  // Convert temperature value (0-100) to actual temperature (0-1)
  const actualTemperature = temperature / 100;

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (demoMode) {
      setIsExpanded(true)
    }
  }, [demoMode]);


  useEffect(() => {
    scrollToBottom();
  }, [chat]);

  useEffect(() => {
    if (enableVectorSearch) {
      fetch(`${apiUrl}/chatbot/vector-store-url`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          apiKey: modelosaurusKey,
          chatbotId: chatbotId,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("got the vector store url.")
          console.log(data.vector_store_url)
          setVectorStoreUrl(data.vector_store_url)
        })
        .catch((error) => {
          console.error('Error:', error);
        });
      }
  }, [enableVectorSearch]);

  // Apply custom CSS if provided
  useEffect(() => {
    if (customCSS) {
      const styleElement = document.createElement('style');
      styleElement.innerHTML = customCSS;
      document.head.appendChild(styleElement);

      return () => {
        document.head.removeChild(styleElement);
      };
    }
  }, [customCSS]);

  const formatBotResponse = (response) => {
    // Add two newline characters after each full stop
    response = response.replace(/\./g, '.\n\n');

    // Remove </s> if it appears (common in LLM outputs)
    response = response.replace(/<\/s>/g, '');

    return response;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const currentMessage = message; // Store the current message
    setLoading(true);

    // Add the user's message to the chat immediately
    setChat(prevChat => [...prevChat, { sender: 'user', message: currentMessage }]);

    // Call the onMessageSent hook
    onMessageSent(currentMessage);

    setMessage(''); // Clear the message input

    try {
      // The API endpoint is configured to use the Modelosaurus backend proxy
      const res = await fetch(`${apiUrl}/chatbot/chat`, {
      //const res= await fetch(`http://localhost:8000/chat`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${modelosaurusKey}`
        },
        body: JSON.stringify({
          chatbot_id: chatbotId,
          model: llm,
          temperature: actualTemperature,
          max_tokens: maxTokens,
          messages: [{ role: "user", content: currentMessage }],
          stream: enableStreaming, // Enable streaming for real-time response
          enable_vector_search: enableVectorSearch, // Enable vector search for RAG
          vector_store_url: vectorStoreUrl,
        }),
      });

      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }

      if (enableStreaming) {
        const reader = res.body.getReader();
        const decoder = new TextDecoder();
        let result = '';

        // Add an initial empty bot message
        setChat(prevChat => [...prevChat, { sender: 'bot', message: '' }]);

        while (true) {
          const { done, value } = await reader.read();
          if (done) break;

          const chunk = decoder.decode(value, { stream: true });
          // Parse SSE data
          const lines = chunk.split('\n').filter(line => line.trim() !== '');

          for (const line of lines) {
            if (line.startsWith('data: ')) {
              const data = line.slice(6);
              if (data === '[DONE]') continue;

              try {
                const parsed = JSON.parse(data);
                if (parsed.choices && parsed.choices[0].delta.content) {
                  result += parsed.choices[0].delta.content;

                  // Update chat with current result
                  setChat((prevChat) => [
                    ...prevChat.slice(0, -1),
                    { sender: 'bot', message: result },
                  ]);
                }
              } catch (e) {
                console.error('Error parsing SSE data:', e);
              }
            }
          }
        }
      } else {
        // Handle non-streaming response
        const data = await res.json();
        const botResponse = data.choices[0].message.content;

        setChat(prevChat => [...prevChat, { sender: 'bot', message: botResponse }]);

        // Call the onMessageReceived hook
        onMessageReceived(botResponse);
      }

      setLoading(false);
    } catch (err) {
      console.error('Fetch error:', err);
      setLoading(false);
      // Add an error message to the chat
      setChat(prevChat => [...prevChat, { sender: 'bot', message: demoMode ? "This is a sample response from your chatbot. " : 'Sorry, an error occurred. Please try again.' }]);
    }
  };

  const handleSendMessage = () => {
    if (message.trim() !== '') {
      handleSubmit({ preventDefault: () => { } });
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  const toggleChat = () => {
    if (!demoMode)
      setIsExpanded(!isExpanded);
  };

  // Dynamic styles based on props
  const styles = {
    header: {
      backgroundColor: headerColor,
      color: getContrastColor(headerColor),
    },
    chatBubbleUser: {
      backgroundColor: chatBubbleUserColor,
      borderRadius: `${borderRadius}px`,
      color: getContrastColor(chatBubbleUserColor),
    },
    chatBubbleBot: {
      backgroundColor: chatBubbleBotColor,
      borderRadius: `${borderRadius}px`,
      color: getContrastColor(chatBubbleBotColor),
    },
    font: {
      fontSize: `${fontSize}px`,
      fontFamily: fontFamily,
    }
  };

  return (
    <>
      {/* Gradient Overlay */}
      {!demoMode && <AnimatePresence>
        {isExpanded && (
          <motion.div
            className={`fixed inset-0 z-40 pointer-events-none`}
            style={{
              background: 'linear-gradient(to left, rgba(0,0,0,0.5), transparent)',
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          ></motion.div>
        )}
      </AnimatePresence>}

      <div
        className={`${!demoMode && "fixed bottom-0 right-0 md:bottom-4 md:right-7"} z-50 w-full md:w-[30rem] drop-shadow-2xl`}
        style={styles.font}
      >
        {/* Header with gradient line */}
        <div className="bg-base-200 rounded-t-lg shadow-lg overflow-hidden">
          <button
            onClick={toggleChat}
            className="p-2 flex items-center justify-between cursor-pointer w-full"
            style={styles.header}
          >
            <span className="flex-1 text-center" style={{ color: getContrastColor(headerColor) }}>
            {titleText}
            </span>
            {isExpanded ? (
              <ChevronDown className="w-6 h-6 text-white" />
            ) : (
              <ChevronUp className="w-6 h-6 text-white" />
            )}
          </button>
          {/* Animated gradient line */}
          <div
            className="bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_100%] animate-gradient h-2"
            style={{
              backgroundImage: `linear-gradient(to right, ${headerColor}, ${chatBubbleUserColor}, ${headerColor})`,
            }}
          ></div>
        </div>

        {/* Collapsible chat container */}
        <div
          className={`transition-all duration-300 ease-in-out overflow-hidden bg-base-200 rounded-b-lg shadow-lg flex flex-col ${isExpanded ? 'h-[38rem]' : 'h-0'
            }`}
        >
          {/* Chat container */}
          <div className="flex-1 flex flex-col overflow-hidden p-6">
            {/* Messages container */}
            <div className="flex-1 overflow-y-auto">
              {chat.map((chatItem, index) =>
                chatItem.message && chatItem.message.trim() === '' ? null : (
                  <div
                    key={index}
                    className={`chat mb-3 ${chatItem.sender === 'bot' ? 'chat-start' : 'chat-end'
                      }`}
                  >
                    {/* Show avatar conditionally */}
                    {(chatItem.sender === 'bot' && showBotIcon) || (chatItem.sender === 'user' && showUserIcon) ? (
                      <div className="chat-image avatar">
                        <div className="w-10 rounded-full">
                          <img
                            alt={chatItem.sender}
                            src={chatItem.sender === 'bot' ? (botIconUrl.trim() != "" ? botIconUrl : botIcon) : (userIconUrl.trim() != "" ? userIconUrl : userIcon)}
                          />

                        </div>
                      </div>
                    ) : null}

                    <div
                      className="chat-bubble relative"
                      style={chatItem.sender === 'bot' ? styles.chatBubbleBot : styles.chatBubbleUser}
                    >
                      {chatItem.sender === "bot"
                        ? formatBotResponse(chatItem.message)
                        : chatItem.message}

                      <div style={{ backgroundColor: chatItem.sender == 'bot' ? chatBubbleBotColor : chatBubbleUserColor }}
                        className={`${borderRadius <= 10 && "hidden"} absolute size-4 rounded-full -bottom-1 ${chatItem.sender == "bot" ? "-left-3" : "-right-3" } bg-red-900 `}></div>
                    </div>
                  </div>
                )
              )}

              {loading && (
                <div className="chat chat-start">
                  {showBotIcon && (
                    <div className="chat-image avatar">
                      <div className="w-10 rounded-full">
                        <img alt="bot" src={botIconUrl} />
                      </div>
                    </div>
                  )}
                  <div
                    className="chat-bubble"
                    style={styles.chatBubbleBot}
                  >
                    <span className="loading loading-dots loading-md"></span>
                  </div>
                </div>
              )}
              <div ref={chatEndRef}></div>
            </div>


            {/* Input area */}
            <div className="flex items-center gap-1 mt-5">
              <input
                type="text"
                className="input input-bordered w-full"
                placeholder="Type a message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={handleKeyPress}
              />
              <button
                className="btn btn-md"
                style={styles.header}
                onClick={handleSendMessage}
              >
                <SendHorizonal className="size-6 text-white" />
              </button>
            </div>
          </div>
        </div>

        {/* Powered by Modelosaurus */}
        <div className="bg-base-300 rounded-b-xl rounded-t-none -mt-4 text-center p-2 text-xs text-white">
          <a
            href="https://modelosaurus.com"
            target="_blank"
            rel="noreferrer"
            className="opacity-40 hover:opacity-90 transition-opacity duration-300 font-octosquare flex items-center justify-center gap-1"
          >
            <img src={modelosaurusLogo} alt="Modelosaurus" className="size-3" />
            <span>POWERED BY 
              <span className="text-purple-600"> MODELOSAURUS</span>
            </span>
          </a>
        </div>
      </div>
    </>
  );
};

export default ModelosaurusChatbot;