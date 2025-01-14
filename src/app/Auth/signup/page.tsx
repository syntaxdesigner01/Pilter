"use client";
import AuthNavBar from "@/components/Auth/AuthNavBar";
import AuthWithGoogle from "@/components/Auth/AuthWithGoogle";
import TextBox from "@/components/Auth/TextBox";
import CustomButton from "@/components/GeneralComponents/CustomButton";
import Footer from "@/components/GeneralComponents/Footer";
import Spinner from "@/components/GeneralComponents/Spinner";
import {
  signUpWithCredential,
  userData,
} from "@/utils/AuthProviders/appAuthCredentials";
import { validateEmail, validatePassword } from "@/utils/validators";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

interface SignInResponse {
  message: string;
  status: number;
  user: userData;
  error: { message: string };
}

export default function SignupPage() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<string | null>(null);
  const [passowordError, setPassowordError] = useState<string | null>(null);
  const [acceptTerms, setAccepTerms] = useState<string | null>(null);
  const [termsAccepted, setTermsAccepted] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      setEmailError(null);
      setPassowordError(null);
      setAccepTerms(null);
    }, 6000);
  }, [emailError, passowordError, acceptTerms]);

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();

    setLoading(true);
    if (!validateEmail(email)) {
      setEmailError("Please enter a valid email address.");
      setLoading(false);
      return;
    }

    if (!validatePassword(password)) {
      setPassowordError(
        "Password must be at least 6 characters long and contain at least one letter and one number."
      );
      setLoading(false);
      return;
    }

    if (!termsAccepted) {
      setAccepTerms("You must accept the terms and conditions.");
      setLoading(false);
      return;
    }

    if (window.navigator.onLine) {
      try {
        const response = await signUpWithCredential({ email, password });
        const data: SignInResponse = JSON.parse(response as string);
        console.log(data);
        setLoading(false);
        setPassowordError(null);
        setEmailError(null);

        if (data?.status === 200) {
          toast.success(data.message);
        } else {
          let errormessage: string = "";
          const message = data?.error?.message;

          if (message && message.includes(":")) {
            errormessage = message.split(":").at(-1)?.trim() || message;
            toast.error(errormessage as string);
          } else {
            errormessage = message;
            toast.error(errormessage as string);
          }
          if (!message) {
            toast.error(data.message);
          }
        }
      } catch (err) {
        setLoading(false);
        console.error(err);
        toast.error(`An error occured, Please try again`);
        setEmail("");
        setPassword("");
      }
    } else {
      toast.error(
        "Network Error - Please try again when you have stable network"
      );
      setLoading(false);
      setEmail("");
      setPassword("");
    }
  };

  return (
    <main>
      <AuthNavBar />

      <section className="flex justify-center items-center w-full h-full  flex-col pt-[10em] py-[6em] md:py-[10%]">
        <h1 className="capitalize md:text-3xl text-xl font-extrabold">
          create account
        </h1>

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
              error={emailError}
            />
          </section>
          <section className="flex">
            <TextBox
              Title="Password"
              Type="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              error={passowordError}
            />
          </section>

          <section className="relative left-[-14vw] md:left-24 top-[-20px] flex items-center justify-center w-full">
            <section
              className={` md:w-1/2 flex gap-2 text-sm font-bold capitalize ${
                passowordError && "pt-20"
              }`}
            >
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

          {acceptTerms && <p className="text-red-500">{acceptTerms}</p>}

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
              smWidth={"90vw"}
            >
              {loading ? <Spinner /> : "Create Account"}
            </CustomButton>
          </section>
        </form>

        <section className="mt-4 flex gap-4 items-center font-bold text-xl">
          <Image
            src="/icons/lineIcone.png"
            alt="line"
            height={0}
            width={0}
            className="md:w-[10vw] w-[20vw] h-1"
          />

          <span>OR</span>

          <Image
            src="/icons/lineIcone.png"
            alt="line"
            height={0}
            width={0}
            className="md:w-[10vw] w-[20vw] h-1"
          />
        </section>

        <section className="py-4">
          <AuthWithGoogle />
        </section>

        <section className="flex gap-2 text-lg md:text-xl font-bold pt-10 flex-col md:flex-row text-center">
          <h1>Already have an account?</h1>
          <Link href="/Auth/signin" className="text-redTheme underline">
            Login
          </Link>
        </section>
      </section>
      <Toaster position="top-right" toastOptions={{ duration: 3000 }} />
      <Footer />
    </main>
  );
}
