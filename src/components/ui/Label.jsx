import React from "react";

export const Label = ({ children, htmlFor, className = "" }) => {
  return (
    <label
      htmlFor={htmlFor}
      className={`block text-sm font-medium ${className}`}
    >
      {children}
    </label>
  );
};
