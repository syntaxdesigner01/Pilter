"use client";
import AuthNavBar from "@/components/Auth/AuthNavBar";
import TextBox from "@/components/Auth/TextBox";
import CustomButton from "@/components/GeneralComponents/CustomButton";
import Footer from "@/components/GeneralComponents/Footer";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

import React from "react";

export default function page() {
  return (
    <main>
      <AuthNavBar />

      <section className="flex justify-center items-center w-full h-full  flex-col py-[10%]  ">
        <h1 className="capitalize text-3xl font-extrabold ">create account</h1>

        <form className="flex flex-col justify-center items-center w-full gap-4">
          <section className="flex ">
            <TextBox Title="Email" PlaceHolder="john@mail.com" Type="email" />
          </section>
          <section className="flex">
            <TextBox Title="Password" PlaceHolder="12ft2" Type="password" />
          </section>

          <section className="text-start">
            <input type="checkbox" />
          </section>

          <section>
            <CustomButton
              color="black"
              width={"40em"}
              rounded={"xl"}
              py={6}
              fontWeight={700}

              // loadingText={'loading'}
            >
              Create Account
            </CustomButton>
          </section>
        </form>

        <section className="mt-4 flex  gap-4 font-bold text-2xl">
          <Image
            src={"/icons/lineIcone.svg"}
            alt={"line"}
            height={2}
            width={150}
          />

          <span>OR</span>

          <Image
            src={"/icons/lineIcone.svg"}
            alt={"line"}
            height={2}
            width={150}
          />
        </section>

        <section className="py-4">
          <Button className="border-2 w-[32em] py-6 rounded-xl text-xl font-bold border-black">
            <Image
              src={"/icons/google.svg"}
              alt={"line"}
              height={30}
              width={30}
            />

            <span>Continue with Google</span>
          </Button>
        </section>
        <section className="flex gap-2 text-xl font-bold pt-10">
          <h1>Already have an account ? </h1>
          <Link href={""} className="text-redTheme underline">
            Login
          </Link>
        </section>
      </section>
      <Footer />
    </main>
  );
}
