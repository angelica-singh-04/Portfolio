// components/bullet.jsx
import React from "react";

const Bullet = ({ list = [] }) => (
  <div>
    {list.map((item, i) => (
      <span key={i} className="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full mr-1 mt-2 inline-block">
        {item}
      </span>
    ))}
  </div>
);

export default Bullet; // <— default export
