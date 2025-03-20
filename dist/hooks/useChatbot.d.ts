import { ChatMessage, ChatbotData } from '../types';
export declare const useChatbot: (modelosaurusKey: string, chatbotId: string) => {
    settings: ChatbotData;
    message: string;
    setMessage: import("react").Dispatch<import("react").SetStateAction<string>>;
    loading: boolean;
    chat: ChatMessage[];
    isExpanded: boolean;
    chatEndRef: import("react").RefObject<HTMLDivElement | null>;
    handleSubmit: (e?: React.FormEvent | {
        preventDefault: () => void;
    }) => Promise<void>;
    handleSendMessage: () => void;
    handleKeyPress: (e: React.KeyboardEvent<HTMLInputElement>) => void;
    toggleChat: () => void;
    calculateWidth: () => string;
    initialLoading: boolean;
};
