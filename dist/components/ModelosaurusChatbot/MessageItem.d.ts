import React from 'react';
import { ChatbotData, ChatMessage } from '../../types';
interface MessageItemProps {
    message: ChatMessage;
    settings: ChatbotData;
}
declare const MessageItem: React.FC<MessageItemProps>;
export default MessageItem;
