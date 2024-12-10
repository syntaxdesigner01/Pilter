"use client";
import AuthNavBar from "@/components/Auth/AuthNavBar";
import AuthWithGoogle from "@/components/Auth/AuthWithGoogle";
import TextBox from "@/components/Auth/TextBox";
import CustomButton from "@/components/GeneralComponents/CustomButton";
import Footer from "@/components/GeneralComponents/Footer";
// import { Button } from "@/components/ui/button";
// import { routeLinks } from "@/utils/routerLinks";
import Image from "next/image";
import Link from "next/link";
// import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function SignupPage() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  // const route = useRouter()
  

  // const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault(); // Prevent default form submission behavior
  //   console.log("Form submitted with email: ", email, " and password: ", password);
  // }

  return (
    <main>
      <AuthNavBar />

      <section className="flex justify-center items-center w-full h-full  flex-col py-[10%]">
        <h1 className="capitalize text-3xl font-extrabold ">create account</h1>

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

          <section className="relative left-10 top-[-20px] flex items-center justify-center w-full">
            <section className="w-1/2 flex gap-2 text-sm font-bold capitalize">
              <input
                type="checkbox"
                height={20}
                width={20}
                size={30}
                className="bg-white text-white"
              />
              <p>Accept terms and condition</p>
            </section>
          </section>

          <section>
            <CustomButton
              color="black"
              width={"40em"}
              rounded={"xl"}
              py={6}
              fontWeight={700}
              // router={() => route.push(routeLinks?.chooseInterest)}
              type="submit"
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
          <AuthWithGoogle />
        </section>
        <section className="flex gap-2 text-xl font-bold pt-10">
          <h1>Already have an account ? </h1>
          <Link href={"/Auth/signin"} className="text-redTheme underline">
            Login
          </Link>
        </section>
      </section>
      <Footer />
    </main>
  );
}
