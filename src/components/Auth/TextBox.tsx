"use client";
import React, { useState } from "react";

export default function TextBox({
  Title,
  Type,
  PlaceHolder,
  value,
  onChange,
}: {
  Title: string;
  Type: string;
  PlaceHolder?: string;
  value: string; // Add value prop
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <section className="flex flex-col w-[40em] relative mt-10">
      <label
        htmlFor="input"
        className={`absolute transition-all duration-200 transform ${
          isFocused || value
            ? "top-[-44px] left-2 text-xl font-bold text-black px-6 bg-white py-2 flex justify-center items-center "
            : "top-5 left-10 text-md font-bold text-black "
        }`}
      >
        {Title}
      </label>
      <input
        id="input"
        type={Type}
        placeholder={PlaceHolder}
        value={value} // Use value prop
        onChange={onChange}
        className={`
          h-16 px-8 bg-white border-2 border-black w-full ring-0 rounded-xl 
          ${isFocused && " shadow-xl"}
          `}
        required
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
    </section>
  );
}
