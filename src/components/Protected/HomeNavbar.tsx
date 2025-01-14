import Image from "next/image";
import React from "react";
import { FaBell } from "react-icons/fa6";

export default function HomeNavbar() {
  return (
    <nav className="flex justify-between items-center w-full px-10 py-4 shadow-md border-b-2 border-slate-300">
      <section>
        <Image src={"/logo.svg"} width={60} height={60} alt="" />
      </section>

      <section className="flex items-center gap-10 ">
        <FaBell className="text-xl" />

        <section className="border-2 p-4 text-xl font-bold flex justify-center items-center bg-pink-500 h-10 w-10 rounded-full">
          <span>s</span>
        </section>
      </section>
    </nav>
  );
}
