"use client";
import AuthNavBar from "@/components/Auth/AuthNavBar";
import AuthWithGoogle from "@/components/Auth/AuthWithGoogle";
import TextBox from "@/components/Auth/TextBox";
import CustomButton from "@/components/GeneralComponents/CustomButton";
import Footer from "@/components/GeneralComponents/Footer";
import { signUpWithCredential } from "@/utils/AuthProviders/appAuthCredentials";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

export default function SignupPage() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [termsAccepted, setTermsAccepted] = useState<boolean>(false);

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (!termsAccepted) {
      setError("You must accept the terms and conditions.");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      await signUpWithCredential({ email, password }).then((e) => {
        console.log(e);
        setLoading(false);
      });
    } catch (err) {
      console.log(err);
    }
  };

  // const handleError = () => {
  //   setTimeout(() => {
  //     <p className="text-red-500">{error}</p>;
  //   }, 30000);

  //   setError(null);
  // };

  return (
    <main>
      <AuthNavBar />

      <section className="flex justify-center items-center w-full h-full flex-col py-[10%]">
        <h1 className="capitalize text-3xl font-extrabold">create account</h1>

        <form
          className="flex flex-col justify-center items-center w-full gap-4"
          onSubmit={handleSubmit}
        >
          <section className="flex">
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

          <section className="relative left-20 top-[-20px] flex items-center justify-center w-full">
            <section className="w-1/2 flex gap-2 text-sm font-bold capitalize">
              <input
                type="checkbox"
                height={20}
                width={20}
                size={30}
                className="bg-white text-white"
                checked={termsAccepted}
                onChange={() => setTermsAccepted(!termsAccepted)}
              />
              <p>Accept terms and conditions</p>
            </section>
          </section>

          {error && <p className="text-red-500">{error}</p>}

          <section>
            <CustomButton
              color="black"
              width={"30em"}
              rounded={"xl"}
              py={6}
              fontWeight={700}
              disabled={loading}
              type="submit"
              click={handleSubmit}
            >
              {/* {loading ? "Creating Account..." : "Create Account"} */}
              <span>Create Account</span>
            </CustomButton>
          </section>
        </form>

        <section className="mt-4 flex gap-4 font-bold text-2xl">
          <Image src="/icons/lineIcone.svg" alt="line" height={2} width={150} />

          <span>OR</span>

          <Image src="/icons/lineIcone.svg" alt="line" height={2} width={150} />
        </section>

        <section className="py-4">
          <AuthWithGoogle />
        </section>
        <section className="flex gap-2 text-xl font-bold pt-10">
          <h1>Already have an account?</h1>
          <Link href="/Auth/signin" className="text-redTheme underline">
            Login
          </Link>
        </section>
      </section>
      <Footer />
    </main>
  );
}
