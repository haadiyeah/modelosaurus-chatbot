import React from 'react';
import { SendHorizonal } from 'lucide-react';
import { ChatbotData } from '../../types';
import { getContrastColor } from '../../utils';

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

  const inputStyle= {
 
        color: getContrastColor(settings.backgroundColor || ""),
        borderColor: `${getContrastColor(settings.backgroundColor || "")}33`,
        backgroundColor: 'transparent',
  }

  return (
    <div className="flex items-center gap-1 mt-5">
      <input
        type="text"
        className="input input-ghost focus:bg-opacity-5 border-2 border-opacity-15 flex-grow"
        style={inputStyle}
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
