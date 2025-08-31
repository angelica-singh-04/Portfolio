import React from "react";
import Bullet from "./bullet";


const Webproject = ({ img, name, duration, description, btn,}) => {
  return (
    <div className="flex flex-row items-center w-full my-3 border border-gray-200 rounded-[10px]">
        <div className="w-[55%] m-5 rounded-[10px] h-max my-4">
            <img
            src={img}
            alt="image"
            className="w-full h-54 object-cover rounded-[10px] border border-gray-300"
        />
        </div>
        <div className="flex flex-col w-[70%] text-left">
            <span className="font-semibold text-sm">{name}</span>
            <span className="font-medium text-xs text-gray-500">{duration}</span>
            <Bullet list={["React", "Tailwind", "UI/UX"]} />
            <span className="font-regular text-xs my-3 text-gray-600 mr-4">{description}</span>
            <span>{btn}</span>
        </div>
    </div>
  );
};

export default Webproject;
