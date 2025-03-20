import React from 'react';
import { ChatbotData } from '../../types';
import { darkenColor } from '../../utils';
import modelosaurusLogo from "../../assets/modelosaurus.png";

interface FooterProps {
  settings: ChatbotData;
  isExpanded: boolean;
}

const Footer: React.FC<FooterProps> = ({ settings, isExpanded }) => {
  return (
    <div
      className={`rounded-b-xl rounded-t-none -mt-4 text-center p-2 text-xs text-white ${!isExpanded && "hidden"}`}
      style={{ backgroundColor: darkenColor(settings.backgroundColor || "#1d232a", 30) }}
    >
      <a
  href="https://modelosaurus.com"
  target="_blank"
  rel="noreferrer"
  className="opacity-40 hover:opacity-90 transition-opacity duration-300 flex items-center justify-center gap-1"
  style={{ 
    fontFamily: "'Octosquare', 'Arial', sans-serif !important",
    textTransform: "uppercase",
    letterSpacing: "0.05em",
    fontWeight: "bold"
  }}
>
  <img src={modelosaurusLogo} alt="Modelosaurus" className="size-3" />
  <span>POWERED BY
    <span style={{ fontWeight: 800 }}> MODELOSAURUS</span>
  </span>
</a>
    </div>
  );
};

export default Footer;
