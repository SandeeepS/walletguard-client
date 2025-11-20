import React from "react";

interface ActionCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  iconBgColor: string;
  iconColor: string;
  onClick: () => void;
}

const ActionCard: React.FC<ActionCardProps> = ({
  title,
  description,
  icon,
  iconBgColor,
  iconColor,
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      className="bg-linear-to-br from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 rounded-lg shadow-lg p-6 flex flex-col items-center justify-center transition-all duration-300 hover:scale-105 border border-white/10 hover:border-white/20 cursor-pointer"
    >
      <div
        className={`w-14 h-14 rounded-full ${iconBgColor} flex items-center justify-center mb-4 border-2 ${iconColor.replace(
          "text",
          "border"
        )}`}
      >
        <div className={iconColor}>{icon}</div>
      </div>
      <h3 className="text-white font-semibold text-lg mb-1">{title}</h3>
      <p className="text-gray-400 text-sm text-center">{description}</p>
    </div>
  );
};

export default ActionCard;
