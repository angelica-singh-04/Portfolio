import React from "react";

const Achievements = ({ img, title, decription, duration }) => {
    return (
        <div className="border border-gray-200 rounded-lg w-full min-h-[64px] flex items-center mt-2 p-2 sm:p-3">
            <div className="w-12 h-12 sm:w-14 sm:h-14 flex-shrink-0 mr-3 sm:mr-4">
                <img
                    src={img}
                    alt="achievement badge"
                    className="w-full h-full object-contain rounded-lg border border-gray-300 p-1 sm:p-2"
                />
            </div>
            <div className="flex flex-col flex-1 min-w-0">
                <div className="text-xs sm:text-sm font-semibold text-left break-words">{title}</div>
                <div className="text-[10px] sm:text-xs text-left italic text-gray-400 mt-0.5">{duration}</div>
                <div className="text-gray-500 text-[10px] sm:text-xs text-left mt-1 break-words leading-relaxed">{decription}</div>
            </div>
        </div>
    );
};

export default Achievements;
