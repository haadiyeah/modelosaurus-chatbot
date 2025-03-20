import { API_URL } from '../constants';
import { ChatbotData } from '../types';

export const fetchChatbotData = async (
  modelosaurusKey: string,
  chatbotId: string
): Promise<{ chatbotData?: ChatbotData; vectorStoreUrl?: string }> => {
  try {
    const response = await fetch(`${API_URL}/chatbot/get-chatbot-data`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        apiKey: modelosaurusKey,
        chatbotId: chatbotId,
      }),
    });
    
    const data = await response.json();
    return {
      chatbotData: data.chatbotData,
      vectorStoreUrl: data.vector_store_url
    };
  } catch (error) {
    console.error('Error fetching chatbot data:', error);
    return {};
  }
};

export const sendChatMessage = async (
  modelosaurusKey: string,
  chatbotId: string,
  message: string,
  settings: ChatbotData,
  vectorStoreUrl: string | null
) => {
  const actualTemperature = (settings.temperature || 30) / 100;
  
  const response = await fetch(`${API_URL}/chatbot/chat`, {
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
      messages: [{ role: "user", content: message }],
      stream: settings.enableStreaming,
      enable_vector_search: settings.enableVectorSearch,
      vector_store_url: vectorStoreUrl,
    }),
  });
  
  return response;
};
