"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import CustomButton from "./CustomButton";
import { useRouter } from "next/navigation";
import { routeLinks } from "@/utils/routerLinks";
import { getSession } from "next-auth/react";
import { CiMenuFries } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";

interface CustomSession {
  user?: {
    name: string;
    email: string;
    image?: string;
  };
  expires: string;
}

export default function NavBar() {
  const [session, setSession] = useState<CustomSession | null>(null);
  const [showMenu, setShowMenu] = useState<boolean>(false);

  const route = useRouter();

  useEffect(() => {
    const fetchSession = async () => {
      const sessionData = await getSession();
      setSession(sessionData as CustomSession);

      if (sessionData) {
        // route.push(routeLinks.mainApHome);

        console.log(session);
      } else {
        route.push(routeLinks.home);
      }
    };
    fetchSession();
  }, [route]);

  return (
    <nav className="px-4 md:p-8 flex items-center justify-between md:px-10 p-6">
      <section className="flex items-center gap-3 md:gap-10">
        <Image
          src={"logo.svg"}
          alt="logo"
          height={70}
          width={70}
          onClick={() => route.push(routeLinks.home)}
          className="w-[70px] h-[70px] md:w-[70px] md:h-[70px]"
        />
        <p className="text-xl">Explore</p>
      </section>
      <section className="hidden md:block">
        {session ? (
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
      </section>

      <section className="md:hidden block">
        <CustomButton
          color="white"
          rounded={"2xs"}
          className="text-black"
          style={{ width: "10px" }}
          hover
          click={() => setShowMenu(true)}
        >
          <CiMenuFries size={"md"}  className="text-black text-3xl" />
        </CustomButton>
      </section>

      {showMenu && (
        <section
          className="fixed top-0 right-0 w-[60%] h-screen bg-black   z-50 "
          // onMouseLeave={() => setShowMenu(false)}
        >
          <section className="fixed right-[-2em] top-4">
            <CustomButton
              color=""
              rounded={"20px"}
              click={() => setShowMenu(false)}
            >
              <IoMdClose size={"30px"} className="text-red-700" />
            </CustomButton>
          </section>
          <section className="flex flex-col gap-10 pt-40 px-4 min-h-screen">
            <CustomButton
              color="#CC1414"
              rounded={"md"}
              style={{ color: "white", width: "100%", fontWeight: 500 }}
              click={() => route.push(routeLinks.signin)}
            >
              Log In
            </CustomButton>
            <CustomButton
              color="white"
              rounded={"md"}
              style={{ color: "black", width: "100%", fontWeight: 500 }}
              click={() => route.push(routeLinks.signup)}
            >
              Sign-up
            </CustomButton>
          </section>
        </section>
      )}
    </nav>
  );
}
