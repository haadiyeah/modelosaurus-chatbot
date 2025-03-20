import React, { useState, useRef, useEffect } from 'react';
import { ChevronUp, ChevronDown, SendHorizonal } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import modelosaurusLogo from "../assets/modelosaurus.png";
import botIcon from '../assets/robot.png';
import userIcon from '../assets/usericon.png';

// API URL as a constant
const API_URL = "https://kodiak-viable-supposedly.ngrok-free.app";

// Define the ChatbotData interface for data from server
interface ChatbotData {
    headerColor?: string;
    chatBubbleUserColor?: string;
    chatBubbleBotColor?: string;
    fontSize?: number;
    borderRadius?: number;
    fontFamily?: string;
    showBotIcon?: boolean;
    showUserIcon?: boolean;
    botIconUrl?: string;
    userIconUrl?: string;
    titleText?: string;
    initialMessage?: string;
    llm?: string;
    temperature?: number;
    maxTokens?: number;
    customCSS?: string;
    enableVectorSearch?: boolean;
    enableStreaming?: boolean;
    onMessageSent?: string;
    onMessageReceived?: string;
}

// Reduce props to only essential ones
interface ModelosaurusChatbotProps {
    modelosaurusKey: string;
    chatbotId: string;
}

// Define chat message interface
interface ChatMessage {
    sender: 'bot' | 'user';
    message: string;
}

const getContrastColor = (hexColor: string): string => {
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

const ModelosaurusChatbot: React.FC<ModelosaurusChatbotProps> = ({
    modelosaurusKey,
    chatbotId,
}) => {
    // Use state for all settings that were previously props
    const [settings, setSettings] = useState<ChatbotData>({
        headerColor: '#6419E6',
        chatBubbleUserColor: '#F000B8',
        chatBubbleBotColor: '#6419E6',
        fontSize: 16,
        borderRadius: 10,
        fontFamily: 'sans-serif',
        showBotIcon: true,
        showUserIcon: true,
        botIconUrl: "",
        userIconUrl: "",
        titleText: 'Chat with AI',
        initialMessage: 'Hello! How can I assist you today?',
        llm: 'llama-3.1-8b-instant',
        temperature: 30,
        maxTokens: 500,
        customCSS: '',
        enableVectorSearch: true,
        enableStreaming: true,
    });

    const [message, setMessage] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);
    const [chat, setChat] = useState<ChatMessage[]>([
        {
            sender: 'bot',
            message: settings.initialMessage || 'Hello! How can I assist you today?',
        },
    ]);
    const [isExpanded, setIsExpanded] = useState<boolean>(false);
    const chatEndRef = useRef<HTMLDivElement>(null);
    const [vectorStoreUrl, setVectorStoreUrl] = useState<string | null>(null);

    // Convert temperature value (0-100) to actual temperature (0-1)
    const actualTemperature = (settings.temperature || 30) / 100;

    const scrollToBottom = (): void => {
        chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [chat]);

    // Initialize chat with initial message
    useEffect(() => {
        if (settings.initialMessage && chat.length === 0) {
            setChat([{
                sender: 'bot',
                message: settings.initialMessage
            }]);
        }
    }, [settings.initialMessage, chat.length]);

    // Fetch chatbot data from the server
    useEffect(() => {
        fetch(`${API_URL}/chatbot/get-chatbot-data`, {
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
                console.log("got the vector store url.");
                if (data.vector_store_url) {
                    console.log(data.vector_store_url);
                    setVectorStoreUrl(data.vector_store_url);
                }

                console.log("data:", data);
                // Check if the response contains the expected data

                // Update all settings from chatbotData
                if (data.chatbotData) {
                    setSettings(prevSettings => ({
                        ...prevSettings,
                        ...data.chatbotData
                    }));
                }
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }, [modelosaurusKey, chatbotId]);

    // Apply custom CSS if provided
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

    const formatBotResponse = (response: string): string => {
        if (!response) return '';

        // Replace </s> if it appears (common in LLM outputs)
        response = response.replace(/<\/s>/g, '');

        // Convert markdown-style bold text to HTML
        response = response.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');

        // Handle lists - add proper spacing after list items
        response = response.replace(/(\d+\.\s.+?)(?:\n|$)/g, '$1\n\n');
        response = response.replace(/(-\s.+?)(?:\n|$)/g, '$1\n\n');

        // Handle paragraphs - ensure proper spacing between paragraphs
        response = response.replace(/\.(?=\s)/g, '.\n\n');

        // Clean up excessive newlines
        response = response.replace(/\n{3,}/g, '\n\n');

        return response;
    };

    const handleSubmit = async (e: React.FormEvent | { preventDefault: () => void }): Promise<void> => {
        e.preventDefault();
        const currentMessage = message;
        setLoading(true);

        // Add the user's message to the chat immediately
        setChat(prevChat => [...prevChat, { sender: 'user', message: currentMessage }]);

        // Execute onMessageSent if available
        if (settings.onMessageSent) {
            try {
                // Using Function constructor to create a function from the string
                const onMessageSentFn = new Function('message', settings.onMessageSent);
                onMessageSentFn(currentMessage);
            } catch (error) {
                console.error('Error executing onMessageSent hook:', error);
            }
        }

        setMessage('');

        try {
            const res = await fetch(`${API_URL}/chatbot/chat`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${modelosaurusKey}`
                },
                body: JSON.stringify({
                    chatbot_id: chatbotId,
                    model: settings.llm,
                    temperature: actualTemperature,
                    max_tokens: settings.maxTokens,
                    messages: [{ role: "user", content: currentMessage }],
                    stream: settings.enableStreaming,
                    enable_vector_search: settings.enableVectorSearch,
                    vector_store_url: vectorStoreUrl,
                }),
            });

            if (!res.ok) {
                throw new Error(`HTTP error! status: ${res.status}`);
            }

            if (settings.enableStreaming) {
                // ...existing streaming code...
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

            setLoading(false);
        } catch (err) {
            console.error('Fetch error:', err);
            setLoading(false);
            // Add an error message to the chat
            setChat(prevChat => [...prevChat, { sender: 'bot', message: 'Sorry, an error occurred. Please try again.' }]);
        }
    };

    const handleSendMessage = (): void => {
        if (message.trim() !== '') {
            handleSubmit({ preventDefault: () => { } });
        }
    };

    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>): void => {
        if (e.key === 'Enter') {
            handleSendMessage();
        }
    };

    const toggleChat = (): void => {
        setIsExpanded(!isExpanded);
    };

    // Dynamic styles based on settings
    const styles = {
        header: {
            backgroundColor: settings.headerColor,
            color: getContrastColor(settings.headerColor || '#6419E6'),
        },
        chatBubbleUser: {
            backgroundColor: settings.chatBubbleUserColor,
            borderRadius: `${settings.borderRadius}px`,
            color: getContrastColor(settings.chatBubbleUserColor || '#F000B8'),
        },
        chatBubbleBot: {
            backgroundColor: settings.chatBubbleBotColor,
            borderRadius: `${settings.borderRadius}px`,
            color: getContrastColor(settings.chatBubbleBotColor || '#6419E6'),
        },
        font: {
            fontSize: `${settings.fontSize}px`,
            fontFamily: settings.fontFamily,
        }
    };

    return (
        <>
            {/* Gradient Overlay */}
            <AnimatePresence>
                {isExpanded && (
                    <motion.div
                        // @ts-ignore - motion.div has correct props but TypeScript doesn't recognize them properly
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
            </AnimatePresence>

            <div
                className="fixed bottom-0 right-0 md:bottom-4 md:right-7 z-50 w-full md:w-[30rem] drop-shadow-2xl"
                style={styles.font}
            >
                {/* Header with gradient line */}
                <div className="bg-base-200 rounded-t-lg shadow-lg overflow-hidden">
                    <button
                        onClick={toggleChat}
                        className="p-2 flex items-center justify-between cursor-pointer w-full"
                        style={styles.header}
                    >
                        <span className="flex-1 text-center" style={{ color: getContrastColor(settings.headerColor || '#6419E6') }}>
                            {settings.titleText}
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
                            backgroundImage: `linear-gradient(to right, ${settings.headerColor}, ${settings.chatBubbleUserColor}, ${settings.headerColor})`,
                        }}
                    ></div>
                </div>

                {/* Collapsible chat container */}
                <div
                    className={`transition-all duration-300 ease-in-out overflow-hidden bg-base-200 rounded-b-lg shadow-lg flex flex-col ${isExpanded ? 'h-[38rem]' : 'h-0'}`}
                >
                    {/* Chat container */}
                    <div className="flex-1 flex flex-col overflow-hidden p-6">
                        {/* Messages container */}
                        <div className="flex-1 overflow-y-auto">
                            {chat.map((chatItem, index) =>
                                chatItem.message && chatItem.message.trim() === '' ? null : (
                                    <div
                                        key={index}
                                        className={`chat mb-3 ${chatItem.sender === 'bot' ? 'chat-start' : 'chat-end'}`}
                                    >
                                        {/* Show avatar conditionally */}
                                        {(chatItem.sender === 'bot' && settings.showBotIcon) || (chatItem.sender === 'user' && settings.showUserIcon) ? (
                                            <div className="chat-image avatar">
                                                <div className="w-10 rounded-full">
                                                    <img
                                                        alt={chatItem.sender}
                                                        src={chatItem.sender === 'bot' ? (settings.botIconUrl?.trim() !== "" ? settings.botIconUrl : botIcon) : (settings.userIconUrl?.trim() !== "" ? settings.userIconUrl : userIcon)}
                                                    />
                                                </div>
                                            </div>
                                        ) : null}

                                        <div
                                            className="chat-bubble relative"
                                            style={chatItem.sender === 'bot' ? styles.chatBubbleBot : styles.chatBubbleUser}
                                        >
                                            {chatItem.sender === "bot"
                                                ? <div dangerouslySetInnerHTML={{ __html: formatBotResponse(chatItem.message).replace(/\n/g, '<br/>') }} />
                                                : chatItem.message}

                                            <div style={{ backgroundColor: chatItem.sender === 'bot' ? settings.chatBubbleBotColor : settings.chatBubbleUserColor }}
                                                className={`${(settings.borderRadius || 10) <= 10 && "hidden"} absolute size-4 rounded-full -bottom-1 ${chatItem.sender === "bot" ? "-left-3" : "-right-3"} bg-red-900 `}></div>
                                        </div>
                                    </div>
                                )
                            )}

                            {loading && (
                                <div className="chat chat-start">
                                    {settings.showBotIcon && (
                                        <div className="chat-image avatar">
                                            <div className="w-10 rounded-full">
                                                <img alt="bot" src={settings.botIconUrl?.trim() !== "" ? settings.botIconUrl : botIcon} />
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
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setMessage(e.target.value)}
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
