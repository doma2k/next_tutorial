"use client";
import WelcomeText from "@/app/components/outputs";
import React, { useRef } from "react";

export default function TerminalSession() {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleDivClick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };
  return (
    <div className="flex flex-col flex-1 h-full p-4" onClick={handleDivClick}>
      <WelcomeText />
      <input
        ref={inputRef}
        className="bg-transparent text-gray-400 text-sm font-mono mb-2 w-full border-none outline-none shadow-none focus:ring-0 hover:shadow-none p-0 mt-auto"
        type="text"
      />
    </div>
  );
}
