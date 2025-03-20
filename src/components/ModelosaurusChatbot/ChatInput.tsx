import React from 'react';
import { SendHorizonal } from 'lucide-react';
import { ChatbotData } from '../../types';

interface ChatInputProps {
  message: string;
  setMessage: (message: string) => void;
  handleSendMessage: () => void;
  handleKeyPress: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  settings: ChatbotData;
}

const ChatInput: React.FC<ChatInputProps> = ({
  message,
  setMessage,
  handleSendMessage,
  handleKeyPress,
  settings
}) => {
  const headerStyle = {
    backgroundColor: settings.headerColor,
    color: 'white',
  };

  return (
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
        style={headerStyle}
        onClick={handleSendMessage}
      >
        <SendHorizonal className="size-6 text-white" />
      </button>
    </div>
  );
};

export default ChatInput;
