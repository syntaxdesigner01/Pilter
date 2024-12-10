"use client";
import AuthNavBar from "@/components/Auth/AuthNavBar";
import AuthWithGoogle from "@/components/Auth/AuthWithGoogle";
import TextBox from "@/components/Auth/TextBox";
import CustomButton from "@/components/GeneralComponents/CustomButton";
import Footer from "@/components/GeneralComponents/Footer";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

export default function SignInPage() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");


  // const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault(); // Prevent default form submission behavior
  //   console.log("Form submitted with email: ", email, " and password: ", password);
  // }

  return (
    <main>
      <AuthNavBar />

      <section className="flex justify-center items-center w-full h-full  flex-col py-[10%]">
        <h1 className="capitalize text-3xl font-extrabold ">
          Sign-in to your account
        </h1>

        <form className="flex flex-col justify-center items-center w-full gap-4 ">
          <section className="flex ">
            <TextBox
              Title="Email"
              Type="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </section>
          <section className="flex">
            <TextBox
              Title="Password"
              Type="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </section>

          <section>
            <CustomButton
              color="black"
              width={"40em"}
              rounded={"xl"}
              py={6}
              fontWeight={700}
            >
              Sign In
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
          <AuthWithGoogle />
        </section>
        <section className="flex gap-2 text-xl font-bold pt-10">
          <h1>Don’t have an account ? </h1>
          <Link href={"/Auth/signup"} className="text-redTheme underline">
            Create Account
          </Link>
        </section>
      </section>
      <Footer />
    </main>
  );
}
