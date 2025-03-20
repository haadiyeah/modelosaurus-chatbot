import { useState, useEffect, useRef, useCallback } from 'react';
import { ChatMessage, ChatbotData } from '../types';
import { fetchChatbotData, sendChatMessage } from '../utils';
import { DEFAULT_SETTINGS } from '../constants';

export const useChatbot = (modelosaurusKey: string, chatbotId: string) => {
  const [settings, setSettings] = useState<ChatbotData>(DEFAULT_SETTINGS);
  const [message, setMessage] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [chat, setChat] = useState<ChatMessage[]>([]);
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const chatEndRef = useRef<HTMLDivElement>(null);
  const [vectorStoreUrl, setVectorStoreUrl] = useState<string | null>(null);

  // Scroll to bottom of chat
  const scrollToBottom = useCallback((): void => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  // Initialize chat with initial message
  useEffect(() => {
    if (settings.initialMessage && chat.length === 0) {
      setChat([{
        sender: 'bot',
        message: settings.initialMessage
      }]);
    }
  }, [settings.initialMessage, chat.length]);

  // Auto-scroll when chat changes
  useEffect(() => {
    scrollToBottom();
  }, [chat, scrollToBottom]);

  // Set to expanded in demo mode
  useEffect(() => {
    if (settings.demoMode) {
      setIsExpanded(true);
    }
  }, [settings.demoMode]);

  // Fetch chatbot data
  useEffect(() => {
    const getChatbotData = async () => {
      const data = await fetchChatbotData(modelosaurusKey, chatbotId);
      
      if (data.vectorStoreUrl) {
        setVectorStoreUrl(data.vectorStoreUrl);
      }
      
      if (data.chatbotData) {
        setSettings(prevSettings => ({
          ...prevSettings,
          ...data.chatbotData
        }));
      }
    };
    
    getChatbotData();
  }, [modelosaurusKey, chatbotId]);

  // Apply custom CSS
  useEffect(() => {
    if (settings.customCSS) {
      const styleElement = document.createElement('style');
      styleElement.innerHTML = settings.customCSS;
      document.head.appendChild(styleElement);

      return () => {
        document.head.removeChild(styleElement);
      };
    }
  }, [settings.customCSS]);

  // Send a message
  const handleSubmit = useCallback(async (e?: React.FormEvent | { preventDefault: () => void }): Promise<void> => {
    if (e) e.preventDefault();
    
    if (!message.trim()) return;
    
    const currentMessage = message;
    setLoading(true);

    // Add the user's message to the chat immediately
    setChat(prevChat => [...prevChat, { sender: 'user', message: currentMessage }]);

    // Execute onMessageSent if available
    if (settings.onMessageSent) {
      try {
        const onMessageSentFn = new Function('message', settings.onMessageSent);
        onMessageSentFn(currentMessage);
      } catch (error) {
        console.error('Error executing onMessageSent hook:', error);
      }
    }

    setMessage('');

    try {
      const res = await sendChatMessage(
        modelosaurusKey,
        chatbotId,
        currentMessage,
        settings,
        vectorStoreUrl
      );

      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }

      if (settings.enableStreaming) {
        const reader = res.body?.getReader();
        if (!reader) throw new Error('Response body reader not available');
        
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
        
        // Execute onMessageReceived for streaming response
        if (settings.onMessageReceived && result) {
          try {
            const onMessageReceivedFn = new Function('message', settings.onMessageReceived);
            onMessageReceivedFn(result);
          } catch (error) {
            console.error('Error executing onMessageReceived hook:', error);
          }
        }
      } else {
        // Handle non-streaming response
        const data = await res.json();
        const botResponse = data.choices[0].message.content;

        setChat(prevChat => [...prevChat, { sender: 'bot', message: botResponse }]);

        // Execute onMessageReceived if available
        if (settings.onMessageReceived) {
          try {
            const onMessageReceivedFn = new Function('message', settings.onMessageReceived);
            onMessageReceivedFn(botResponse);
          } catch (error) {
            console.error('Error executing onMessageReceived hook:', error);
          }
        }
      }
    } catch (err) {
      console.error('Fetch error:', err);
      // Add an error message to the chat
      setChat(prevChat => [...prevChat, { sender: 'bot', message: 'Sorry, an error occurred. Please try again.' }]);
    } finally {
      setLoading(false);
    }
  }, [message, modelosaurusKey, chatbotId, settings, vectorStoreUrl]);

  const handleSendMessage = useCallback((): void => {
    if (message.trim() !== '') {
      handleSubmit();
    }
  }, [message, handleSubmit]);

  const handleKeyPress = useCallback((e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  }, [handleSendMessage]);

  const toggleChat = useCallback((): void => {
    if (!settings.demoMode) {
      setIsExpanded(!isExpanded);
    }
  }, [settings.demoMode, isExpanded]);

  const calculateWidth = useCallback(() => {
    if (settings.demoMode || settings.fullWidth) {
      return '100%';
    }
    return `${settings.chatWidth}px`;
  }, [settings.demoMode, settings.fullWidth, settings.chatWidth]);

  return {
    settings,
    message,
    setMessage,
    loading,
    chat,
    isExpanded,
    chatEndRef,
    handleSubmit,
    handleSendMessage,
    handleKeyPress,
    toggleChat,
    calculateWidth
  };
};
