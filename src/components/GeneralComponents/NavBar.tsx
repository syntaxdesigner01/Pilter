"use client";
import Image from 'next/image'
import React from 'react'
import CustomButton from './CustomButton';
import { useRouter } from 'next/navigation';



export default function NavBar() {

  const route = useRouter()

  return (
    <nav className="p-8 flex items-center justify-between" >
      <section className="flex items-center gap-10">
        <Image src={"logo.svg"} alt="logo" height={90} width={90} />
        <p className="text-xl">Explore</p>
      </section>

      <section className="flex gap-10">
        <CustomButton
          color="#CC1414"
          className="hover:border-2 hover:bg-white hover:text-black hover:border-black"
          hover
          onClick={() => route.push("/Auth/signup")}
        >
          Log In
        </CustomButton>
        <CustomButton
          hover
          color="black"
          className="hover:border-2 hover:bg-white hover:text-black hover:border-black"
          onClick={() => route.push("/Auth/signin")}
        >
          Sign In
        </CustomButton>
      </section>
    </nav>
  );
}
