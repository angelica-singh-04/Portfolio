import React, { useState } from "react";

export default function Form() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mssg: "",
  });

  // handle change for inputs
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    // You can integrate EmailJS, API, or backend call here
  };

  return (
    <form
      className="flex flex-col w-full gap-3"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        value={formData.name}
        onChange={handleChange}
        className="p-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-600 text-xs"
      />
      <input
        type="email"
        name="email"
        placeholder="Your Email"
        value={formData.email}
        onChange={handleChange}
        className="p-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-600 text-xs"
      />
      <textarea
        name="mssg"
        placeholder="Your Message"
        value={formData.mssg}
        onChange={handleChange}
        className="p-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-600 resize-none h-24 text-xs"
      />
      <button
        type="submit"
        className="bg-black hover:bg-gray-800 text-white py-3 rounded-lg text-xs font-semibold transition-colors"
      >
        Send Message
      </button>
    </form>
  );
}