"use client";
import Image from "next/image";
import { Input } from "@chakra-ui/react";
import CustomButton from "./CustomButton";

export default function Footer() {
  return (
    <footer className="bg-[#282626] px-4 md:px-10 py-10  text-white  w-full relative overflow-hidden bottom-0 ">
      <section className="grid grid-cols-1 lg:grid-cols-2  justify-between items-center  w-full">
        <section className="flex justify-center w-full md:justify-between  gap-10 md:gap-20">
          <section className="">
            <Image
              src={"/logoDark.svg"}
              alt="logo"
              width={100}
              height={100}
              className="w-[90] md:w-[20vw]"
            />
          </section>
          <section className="flex w-full justify-evenly lg:justify-between  gap-4 md:text-lg text-[12px]">
            <section className="flex flex-col gap-2">
              <li>Home</li>
              <li>Explore</li>
              <li>Kitty AI</li>
              <li>About Us</li>
              <li>Blog</li>
            </section>

            <section className="flex flex-col gap-2 pt-[0.3em] md:pt-0">
              <li>Sign Up</li>
              <li>Login</li>
              <li>Terms of Service</li>
              <li>Privacy Policy</li>
            </section>
          </section>
        </section>

        <section className="flex min-w-full flex-col gap-2 pt-10  justify-center items-center">
          <p className="text-center">Get emails on our latest features first</p>
          <Input
            placeholder="me@example.com"
            variant="subtle"
            px={4}
            bg={"white"}
            color={"black"}
            size={"md"}
            w={{ sm: "60vw", md: "70vw",lg :"40vw"}}
            rounded={"md"}
            type="email"
          />
          <CustomButton
            color="black"
            rounded={"sm"}
            w={"full"}
            fontWeight={800}
            type="submit"
            className="hover:bg-[#CC1414]"
          >
            Subscribe
          </CustomButton>
        </section>
      </section>

      <section className="relative top-10 pb-10">
        <p className="text-center text-sm md:text-lg">
          Built with by Syntax Designer ❤ . copyright @2024. All right resvered
        </p>
      </section>
    </footer>
  );
}
