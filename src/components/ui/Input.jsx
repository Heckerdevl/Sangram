import React from "react";

export const Input = ({ className = "", ...props }) => {
  return (
    <input
      className={`w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 ${className}`}
      {...props}
    />
  );
};
