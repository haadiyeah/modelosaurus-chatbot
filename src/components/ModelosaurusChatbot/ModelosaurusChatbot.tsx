import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ModelosaurusChatbotProps } from '../../types';
import { useChatbot } from '../../hooks/useChatbot';

// Component imports
import ChatHeader from './ChatHeader';
import MessageItem from './MessageItem';
import ChatInput from './ChatInput';
import Footer from './Footer';

//image imports
import botIcon from '../../assets/robot.png';
import { getContrastColor } from '../../utils';

const ModelosaurusChatbot: React.FC<ModelosaurusChatbotProps> = ({
    modelosaurusKey,
    chatbotId,
}) => {
    const {
        settings,
        message,
        setMessage,
        loading,
        chat,
        isExpanded,
        chatEndRef,
        handleSendMessage,
        handleKeyPress,
        toggleChat,
        calculateWidth,
        initialLoading,
    } = useChatbot(modelosaurusKey, chatbotId);

    const fontStyle = {
        fontSize: `${settings.fontSize}px`,
        fontFamily: settings.fontFamily,
    };

    return (
        initialLoading ? <></>
            :
            <>
                {/* Gradient Overlay */}
                {!settings.demoMode && (
                    <AnimatePresence>
                        {isExpanded && (
                            <motion.div
                                // @ts-ignore -- code works but typescript is not happy
                                className="fixed inset-0 z-40 pointer-events-none"
                                style={{
                                    background: 'linear-gradient(to left, rgba(0,0,0,0.5), transparent)',
                                }}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.3 }}
                            />
                        )}
                    </AnimatePresence>
                )}

                <div
                    className={`${!settings.demoMode && "fixed bottom-0 right-0 md:bottom-4 md:right-7"} z-50 drop-shadow-2xl`}
                    style={{
                        ...fontStyle,
                        width: calculateWidth()
                    }}
                >
                    {/* Header */}
                    <ChatHeader
                        settings={settings}
                        isExpanded={isExpanded}
                        toggleChat={toggleChat}
                    />

                    {/* Collapsible chat container */}
                    <div
                        className={`transition-all duration-300 ease-in-out overflow-hidden rounded-b-lg shadow-lg flex flex-col ${isExpanded ? 'h-[38rem]' : 'h-0'}`}
                        style={{ backgroundColor: settings.backgroundColor }}
                    >
                        {/* Chat container */}
                        <div className="flex-1 flex flex-col overflow-hidden p-6">
                            {/* Messages container */}
                            <div className="flex-1 overflow-y-auto">
                                {chat.map((chatItem, index) =>
                                    chatItem.message && chatItem.message.trim() !== '' ? (
                                        <MessageItem
                                            key={index}
                                            message={chatItem}
                                            settings={settings}
                                        />
                                    ) : null
                                )}

                                {/* Loading indicator */}
                                {loading && (
                                    <div className="chat chat-start">
                                        {settings.showBotIcon && (
                                            <div className="chat-image avatar">
                                                <div className="w-10 rounded-full">
                                                    <img
                                                        alt="bot"
                                                        src={botIcon}
                                                    />
                                                </div>
                                            </div>
                                        )}
                                        <div
                                            className="chat-bubble relative"
                                            style={{
                                                backgroundColor: settings.chatBubbleBotColor,
                                                borderRadius: `${settings.borderRadius}px`,
                                            }}
                                        >
                                            <span className={`loading !loading-dots !loading-md`} style={{ color: getContrastColor(settings.chatBubbleBotColor || "fff") }}></span>
                                            <div
                                                style={{
                                                    backgroundColor: settings.chatBubbleBotColor
                                                }}
                                                className={`${(settings.borderRadius || 10) <= 10 && "hidden"} absolute size-4 rounded-full -bottom-1  -left-3 `}
                                            />

                                        </div>
                                    </div>
                                )}
                                <div ref={chatEndRef}></div>
                            </div>

                            {/* Input area */}
                            <ChatInput
                                message={message}
                                setMessage={setMessage}
                                handleSendMessage={handleSendMessage}
                                handleKeyPress={handleKeyPress}
                                settings={settings}
                            />
                        </div>
                    </div>

                    {/* Footer */}
                    <Footer settings={settings} isExpanded={isExpanded} />
                </div>
            </>
    );
};

export default ModelosaurusChatbot;
