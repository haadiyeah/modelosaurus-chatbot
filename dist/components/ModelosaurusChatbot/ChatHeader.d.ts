import React from 'react';
import { ChatbotData } from '../../types';
interface ChatHeaderProps {
    settings: ChatbotData;
    isExpanded: boolean;
    toggleChat: () => void;
}
declare const ChatHeader: React.FC<ChatHeaderProps>;
export default ChatHeader;
