import React from "react";
import Bullet from "./Bullet";

const Webproject = ({ img, name, duration, description, btn, list = [] }) => {
  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center w-full my-3 sm:my-4 border border-gray-200 rounded-lg overflow-hidden">
      <div className="w-full sm:w-[45%] md:w-[40%] flex-shrink-0">
        <img
          src={img}
          alt={name}
          className="w-full h-48 sm:h-56 md:h-64 object-cover"
        />
      </div>
      <div className="flex flex-col w-full sm:w-[55%] md:w-[60%] text-left p-4 sm:p-5">
        <span className="font-semibold text-sm sm:text-base">{name}</span>
        <span className="font-medium text-xs text-gray-500 mt-1">{duration}</span>
        <Bullet list={list} />
        <span className="font-regular text-xs sm:text-sm my-3 text-gray-600 leading-relaxed">
          {description}
        </span>
        <div className="mt-auto">{btn}</div>
      </div>
    </div>
  );
};

export default Webproject;
