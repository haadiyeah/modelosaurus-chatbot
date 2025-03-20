import { ChatbotData } from '../types';
export declare const fetchChatbotData: (modelosaurusKey: string, chatbotId: string) => Promise<{
    chatbotData?: ChatbotData;
    vectorStoreUrl?: string;
}>;
export declare const sendChatMessage: (modelosaurusKey: string, chatbotId: string, message: string, settings: ChatbotData, vectorStoreUrl: string | null) => Promise<Response>;
