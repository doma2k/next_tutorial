"use client";

import React, { useRef } from "react";

export default function TerminalSession() {
  const inputRef = useRef<HTMLInputElement>(null);

  // Function to focus the input when div is clicked
  const handleDivClick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };
  return (
    <div className="flex flex-col flex-1 h-full p-4" onClick={handleDivClick}>
      <p className="text-gray-400 text-sm font-mono mb-2">
        Welcome to the Acme Terminal, your command center for all things Acme.
      </p>
      <p className="text-gray-400 text-sm font-mono mb-2">
        Please select an option from the menu below:
      </p>
      <input
        ref={inputRef}
        className="bg-transparent text-gray-400 text-sm font-mono mb-2 w-full border-none outline-none shadow-none focus:ring-0 hover:shadow-none p-0"
        type="text"
      />
    </div>
  );
}
