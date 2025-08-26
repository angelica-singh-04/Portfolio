import React from "react";

const HorizontalSkills = ({
  items = [],
  speed = 30,
  boxColor = "bg-gray-100",
  boxSize = "w-64 h-20",
  boxClass = "",
  reverse = false,
}) => {
  const animationName = reverse ? "scrollReverse" : "scrollForward";

  return (
    <div className="overflow-hidden w-full py-2">
      <div
        className="flex whitespace-nowrap"
        style={{
          animation: `${animationName} ${speed*2}s linear infinite`,
        }}
      >
        {/* Duplicate items for seamless loop */}
        {[...items, ...items].map((item, i) => (
          <div
            key={i}
            className={`${boxSize} ${boxColor} flex items-center justify-center mx-2 rounded-lg flex-shrink-0 ${boxClass}`}
          >
            <div className="flex items-center justify-center space-x-2">
              {item.image && (
                <img
                  src={item.image}
                  alt={item.text || `item-${i}`}
                  className="w-5 h-5 object-contain"
                />
              )}
              <span className="font-medium text-center">{item.text}</span>
            </div>
          </div>
        ))}
      </div>

      <style>
        {`
          @keyframes scrollForward {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }

          @keyframes scrollReverse {
            0% { transform: translateX(-50%); }
            100% { transform: translateX(0); }
          }
        `}
      </style>
    </div>
  );
};

export default HorizontalSkills;
