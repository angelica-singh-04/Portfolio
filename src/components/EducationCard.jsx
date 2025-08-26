import React from "react";

const EducationCard = ({ logo, collegeName, course, duration }) => {
  return (
    <div className="flex flex-row items-center w-full my-3">
      {/* Logo */}
      <div className="w-[12%] h-full rounded-full" >
        <img
            src={logo}
            alt="logo"
            className="w-full h-full object-cover rounded-full border border-gray-300"
        />
      </div>

      {/* College Info */}
      <div className="w-full flex flex-col mx-3">
        <div className="text-sm font-semibold">{collegeName}</div>
        <div className="text-xs text-gray-500 font-[Inter]">{course}</div>
      </div>

      {/* Duration */}
      <div className="text-gray-500 text-sm w-[30%] text-right">{duration}</div>
    </div>
  );
};

export default EducationCard;
