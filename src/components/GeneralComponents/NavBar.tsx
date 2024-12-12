"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import CustomButton from "./CustomButton";
import { useRouter } from "next/navigation";
import { routeLinks } from "@/utils/routerLinks";
import { auth } from "@/auth";


export default function NavBar() {
  const [userSession, setUserSession] = useState<boolean>(false);

  const route = useRouter();

  return (
    <nav className="p-8 flex items-center justify-between px-10">
      <section className="flex items-center gap-10">
        <Image
          src={"logo.svg"}
          alt="logo"
          height={70}
          width={70}
          onClick={() => route.push(routeLinks.home)}
        />
        <p className="text-xl">Explore</p>
      </section>

      {userSession ? (
        <p>Dashboard</p>
      ) : (
        <section className="flex gap-10">
          <CustomButton
            color="#CC1414"
            className="hover:border-2 hover:bg-white hover:text-black hover:border-black"
            hover
            click={() => route.push(routeLinks.signin)}
          >
            Log In
          </CustomButton>
          <CustomButton
            hover
            color="black"
            className="hover:border-2 hover:bg-white hover:text-black hover:border-black"
            click={() => route.push(routeLinks.signup)}
          >
            Sign-up
          </CustomButton>
        </section>
      )}
    </nav>
  );
}
