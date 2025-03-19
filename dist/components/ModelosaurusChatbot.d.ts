import React from 'react';
interface ModelosaurusChatbotProps {
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
    apiUrl?: string;
    llm?: string;
    temperature?: number;
    maxTokens?: number;
    modelosaurusKey: string;
    chatbotId: string;
    onMessageSent?: (message: string) => void;
    onMessageReceived?: (message: string) => void;
    customCSS?: string;
    enableVectorSearch?: boolean;
    enableStreaming?: boolean;
    demoMode?: boolean;
}
declare const ModelosaurusChatbot: React.FC<ModelosaurusChatbotProps>;
export default ModelosaurusChatbot;
