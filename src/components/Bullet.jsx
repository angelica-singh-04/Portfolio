import React from "react";

const Bullet = ({ list = [] }) => (
  <div className="flex flex-wrap mt-2 sm:mt-3 md:mt-3">
    {list.map((item, i) => (
      <span key={i} className="bg-gray-100 text-gray-700 text-xs px-2 sm:px-2 md:px-3 py-1 rounded-full mr-1 sm:mr-2 md:mr-3 mt-1 sm:mt-2 md:mt-2 inline-block">
        {item}
      </span>
    ))}
  </div>
);

export default Bullet;
