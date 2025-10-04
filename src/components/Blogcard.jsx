import React from "react";
import FigmaIcon from "../assets/hyperlink.png";

const BlogCard = ({ img, title, description, link, duration }) => {
  return (
    <div className="flex flex-col text-left w-full sm:w-[48%]">
      {/* Image wrapper */}
      <div className="relative group">
        <img
          src={img}
          className="h-40 sm:h-44 md:h-48 w-full object-cover rounded-lg border border-gray-200"
          alt={title}
        />
        {/* Figma icon link (only on hover) */}
        <a
          href="https://www.figma.com/design/AzAyM0czPtcFUko87zDAh8/case_study?node-id=0-1&t=04JcqDKdz6t0xr5F-1"
          target="_blank"
          rel="noopener noreferrer"
          className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
          <img
            src={FigmaIcon}
            alt="View in Figma"
            className="h-6 w-6 bg-white rounded-full p-1 shadow-md hover:scale-110 transition-transform"
          />
        </a>
      </div>

      {/* Text content */}
      <div className="mt-3">
        <div className="font-semibold text-sm sm:text-base text-left">{title}</div>
        <div className="text-xs text-gray-400 italic mt-1">{duration}</div>
        <div className="text-xs sm:text-sm text-gray-500 text-left my-2 leading-relaxed">
          {description}
        </div>
        <div className="mt-2">{link}</div>
      </div>
    </div>
  );
};

export default BlogCard;
