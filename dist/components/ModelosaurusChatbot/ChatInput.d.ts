import React from 'react';
import { ChatbotData } from '../../types';
interface ChatInputProps {
    message: string;
    setMessage: (message: string) => void;
    handleSendMessage: () => void;
    handleKeyPress: (e: React.KeyboardEvent<HTMLInputElement>) => void;
    settings: ChatbotData;
}
declare const ChatInput: React.FC<ChatInputProps>;
export default ChatInput;
