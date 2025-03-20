export interface ChatbotData {
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
  backgroundColor?: string;
  chatWidth?: number;
  fullWidth?: boolean;
  demoMode?: boolean;
}

export interface ModelosaurusChatbotProps {
  modelosaurusKey: string;
  chatbotId: string;
}

export interface ChatMessage {
  sender: 'bot' | 'user';
  message: string;
}
