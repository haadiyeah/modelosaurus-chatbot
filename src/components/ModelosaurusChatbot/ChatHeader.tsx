import React from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';
import { ChatbotData } from '../../types';
import { getContrastColor } from '../../utils';

interface ChatHeaderProps {
  settings: ChatbotData;
  isExpanded: boolean;
  toggleChat: () => void;
}

const ChatHeader: React.FC<ChatHeaderProps> = ({ settings, isExpanded, toggleChat }) => {
  const headerStyle = {
    backgroundColor: settings.headerColor,
    color: getContrastColor(settings.headerColor || '#6419E6'),
  };

  return (
    <div className="rounded-t-lg shadow-lg overflow-hidden" style={{ backgroundColor: settings.backgroundColor }}>
      <button
        onClick={toggleChat}
        className="p-2 flex items-center justify-between cursor-pointer w-full"
        style={headerStyle}
      >
        <span className="flex-1 text-center" style={{ color: getContrastColor(settings.headerColor || '#6419E6') }}>
          {settings.titleText}
        </span>
        {isExpanded ? (
          <ChevronDown className="w-6 h-6 text-white" />
        ) : (
          <ChevronUp className="w-6 h-6 text-white" />
        )}
      </button>
      
      {/* Animated gradient line */}
      <div
        className="bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_100%] animate-gradient h-2"
        style={{
          backgroundImage: `linear-gradient(to right, ${settings.headerColor}, ${settings.chatBubbleUserColor}, ${settings.headerColor})`,
        }}
      />
    </div>
  );
};

export default ChatHeader;
