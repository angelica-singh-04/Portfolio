import React from "react";

const Webproject = ({ img, name, duration, description }) => {
  return (
    <div className="flex flex-row items-center w-full my-3 border border-gray-200 rounded-[10px]">
        <div className="w-[45%] m-5 rounded-[10px] h-34">
            <img
            src={img}
            alt="image"
            className="w-full h-30px object-cover rounded-[10px] h-34 border border-gray-300"
        />
        </div>
        <div className="flex flex-col w-[70%] text-left">
            <span className="font-semibold text-sm">{name}</span>
            <span className="font-medium text-xs text-gray-500">{duration}</span>
            <span className="font-regular text-xs my-3 text-gray-600 mr-4">{description}</span>

        </div>
    </div>
  );
};

export default Webproject;
