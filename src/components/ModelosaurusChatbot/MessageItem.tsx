import React from 'react';
import { ChatbotData, ChatMessage } from '../../types';
import { formatBotResponse, getContrastColor } from '../../utils';
import botIcon from '../../assets/robot.png';
import userIcon from '../../assets/usericon.png';

interface MessageItemProps {
  message: ChatMessage;
  settings: ChatbotData;
}

const MessageItem: React.FC<MessageItemProps> = ({ message, settings }) => {
  const { sender, message: content } = message;
  const isBotMessage = sender === 'bot';
  
  // Styles based on sender
  const bubbleStyle = isBotMessage
    ? {
        backgroundColor: settings.chatBubbleBotColor,
        borderRadius: `${settings.borderRadius}px`,
        color: getContrastColor(settings.chatBubbleBotColor || '#6419E6'),
      }
    : {
        backgroundColor: settings.chatBubbleUserColor,
        borderRadius: `${settings.borderRadius}px`,
        color: getContrastColor(settings.chatBubbleUserColor || '#F000B8'),
      };
  
  // Show avatars conditionally
  const showAvatar = isBotMessage 
    ? settings.showBotIcon 
    : settings.showUserIcon;
  
  // Select appropriate avatar
  const avatarSrc = isBotMessage
    // ? (settings.botIconUrl?.trim() !== "" ? settings.botIconUrl : botIcon)
    // : (settings.userIconUrl?.trim() !== "" ? settings.userIconUrl : userIcon);
    ?  botIcon
    : userIcon;

  return (
    <div className={`chat mb-3 ${isBotMessage ? 'chat-start' : 'chat-end'}`}>
      {showAvatar && (
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img alt={sender} src={avatarSrc} />
          </div>
        </div>
      )}
      
      <div className="chat-bubble relative" style={bubbleStyle}>
        {isBotMessage
          ? <div dangerouslySetInnerHTML={{ __html: formatBotResponse(content).replace(/\n/g, '<br/>') }} />
          : content
        }
        
        <div 
          style={{ backgroundColor: isBotMessage ? settings.chatBubbleBotColor : settings.chatBubbleUserColor }}
          className={`${(settings.borderRadius || 10) <= 10 && "hidden"} absolute size-4 rounded-full -bottom-1 ${isBotMessage ? "-left-3" : "-right-3"} bg-red-900`}
        />
      </div>
    </div>
  );
};

export default MessageItem;
