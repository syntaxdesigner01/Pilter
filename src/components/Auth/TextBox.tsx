"use client";
import React, { useState } from "react";
import { VscEye, VscEyeClosed } from "react-icons/vsc";
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
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  const [isFocused, setIsFocused] = useState(false);
  const [show, setShow] = useState(false);

  // const visitibilityToggleOn = ()=>{
  //   document.getElementById("input")?.setAttribute("type","password")
  //   setVisitibilityToggle(true);
  // }
  // const visitibilityToggleOff = ()=>{
  //   document.getElementById("input")?.setAttribute("type","text")
  //   setVisitibilityToggle(false);
  // }

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
        type={Type === "password" && show ? "text" : Type}
        placeholder={PlaceHolder}
        value={value}
        onChange={onChange}
        className={`
          h-16 px-8 bg-white border-2 border-black w-full ring-0 rounded-xl 
          ${isFocused && " shadow-xl"}
          `}
        required
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />

      {Type === "password" && (
        <section className="flex justify-end items-end relative top-[-2.6em] right-4 ">
          <VscEye
            className={`text-2xl ${show && "hidden"}`}
            onClick={() => setShow(true)}
          />

          <VscEyeClosed
            className={`text-2xl ${!show && "hidden"}`}
            onClick={() => setShow(false)}
          />
        </section>
      )}
    </section>
  );
}
