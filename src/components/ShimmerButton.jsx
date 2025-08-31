import React from "react";

const ShimmerButton = ({ text = "Click Me", onClick, className = "" }) => {
  return (
    <button
      onClick={onClick}
      className={`relative overflow-hidden px-5 py-2 font-xs text-xs text-white bg-blue-600 rounded-md shadow-md hover:shadow-lg transition-all duration-300 ${className}`}
    >
      <span className="relative z-10">{text}</span>

      {/* Whitish shimmer effect */}
      <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent transform -translate-x-full animate-shimmer"></span>

      <style>
        {`
          @keyframes shimmer {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(100%); }
          }
          .animate-shimmer {
            animation: shimmer 2.5s infinite;
          }
        `}
      </style>
    </button>
  );
};

export default ShimmerButton;
