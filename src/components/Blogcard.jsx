import React from "react";
import FigmaIcon from "../assets/hyperlink.png";

const BlogCard = ({ img, title, description, link, duration }) => {
  return (
    <div className="flex flex-col text-left w-[47%]">
      {/* Image wrapper */}
      <div className="relative group">
        <img
          src={img}
          className="h-[150px] w-full object-cover rounded-lg" // fixed invalid h-38
          alt="Blog_image"
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
            alt="Figma_link"
            className="h-6 w-6 bg-white rounded-full p-1 mx-1"
          />
        </a>
      </div>

      {/* Text content */}
      <div className="font-semibold text-sm mt-2 text-left">{title}</div>
      <div className="text-sm italic text-xs text-gray-400">{duration}</div>
      <div className="text-xs text-gray-400 text-left my-2">{description}</div>
      <div>
        <button>{link}</button>
      </div>
    </div>
  );
};

export default BlogCard;
