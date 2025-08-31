import React from "react";

const Achievements=({img , title, decription, duration }) => {
    return(
        <div className="border border-gray-200 rounded-lg w-full h-16 flex items-center mt-2">
            <div className="w-[10%] h-full p-3">
            <img
            src={img}
            alt="logo"
            className="w-full h-full object-cover rounded-lg border border-gray-300 p-2"
             />
            </div>
            <div className="flex flex-col text-right">
                <div className="text-sm font-semibold text-left">{title}</div>
                <div className="text-xs text-left italic text-gray-400">{duration}</div>
                <div className="text-gray-500 text-xs text-left">{decription}</div>
                
            </div>
            
        </div>
    )
}
export default Achievements;