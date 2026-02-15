// src/components/Form.js
import React, { useState } from "react";

export default function Form() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState({
    submitting: false,
    info: { error: false, msg: null },
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    setStatus({
      submitting: true,
      info: { error: false, msg: null },
    });

    try {
      // UPDATED: Points to the Vercel API route
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus({
          submitting: false,
          info: { error: false, msg: "Message sent successfully!" },
        });
        setFormData({ name: "", email: "", message: "" });
      } else {
        const data = await response.json();
        setStatus({
          submitting: false,
          info: { error: true, msg: data.message || "Failed to send message." },
        });
      }
    } catch (error) {
      setStatus({
        submitting: false,
        info: { error: true, msg: "An error occurred. Please try again later." },
      });
    }
  };

  return (
    <form className="flex flex-col w-full gap-3" onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        value={formData.name}
        onChange={handleChange}
        required
        className="p-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-600 text-xs"
      />
      <input
        type="email"
        name="email"
        placeholder="Your Email"
        value={formData.email}
        onChange={handleChange}
        required
        className="p-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-600 text-xs"
      />
      <textarea
        name="message"
        placeholder="Your Message"
        value={formData.message}
        onChange={handleChange}
        required
        className="p-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-600 resize-none h-24 text-xs"
      />
      
      {status.info.msg && (
        <div
          className={`text-xs text-center p-2 rounded ${
            status.info.error ? "text-red-600 bg-red-50" : "text-green-600 bg-green-50"
          }`}
        >
          {status.info.msg}
        </div>
      )}

      <button
        type="submit"
        disabled={status.submitting}
        className="bg-black hover:bg-gray-800 text-white py-3 rounded-lg text-xs font-semibold transition-colors disabled:bg-gray-400"
      >
        {status.submitting ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
