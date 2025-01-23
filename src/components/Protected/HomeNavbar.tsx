import Image from "next/image";
import React from "react";
import { FaBell } from "react-icons/fa6";
import LoginUser from "./LoginUser";

export default function HomeNavbar() {
  return (
    <nav className="flex justify-between items-center w-full px-10 py-4 shadow-md border-b-2 border-slate-300">
      <section>
        <Image src={"/logo.svg"} width={60} height={60} alt="" />
      </section>
      <section>
        <h1 className="font-extrabold text-3xl leading-loose bg-gradient-to-r from-gray-600 to-red-600 text-transparent bg-clip-text">
          Kitty AI Studio
        </h1>
      </section>
      <section className="flex items-center gap-10 ">
        <FaBell className="text-2xl" />

      

        <LoginUser/>
      </section>
    </nav>
  );
}
