"use client";
import AuthNavBar from "@/components/Auth/AuthNavBar";
import AuthWithGoogle from "@/components/Auth/AuthWithGoogle";
import TextBox from "@/components/Auth/TextBox";
import CustomButton from "@/components/GeneralComponents/CustomButton";
import Footer from "@/components/GeneralComponents/Footer";
import {
  signInWithUserCredential,
  userData,
} from "@/utils/AuthProviders/appAuthCredentials";
import { routeLinks } from "@/utils/routerLinks";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { validateEmail, validatePassword } from "@/utils/validators";
import Spinner from "@/components/GeneralComponents/Spinner";


interface SignInResponse {
  message: string;
  status: number;
  user: userData;
}

export default function SignInPage() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<string | null>(null);
  const [passowordError, setPassowordError] = useState<string | null>(null);

  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      setEmailError(null);
      setPassowordError(null);
    }, 6000);
  }, [emailError, passowordError]);

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

    if (window.navigator.onLine) {
      try {
        const response = await signInWithUserCredential({ email, password });
        const data: SignInResponse = JSON.parse(response as string);
        setLoading(false);
        
        if (data?.status === 200) {
          router.push(routeLinks.mainApHome);
        } else toast.error(data.message);
        
      } catch (err) {
        console.error(err);
        setLoading(false);
        toast.error("An error occurred, Please try again");
        setEmail("");
        setPassword("");
      }
    } else {
      toast.error(
        "Network Error - Please try again when you have a stable network"
      );
      setLoading(false);
    }
  };

  return (
    <main>
      <AuthNavBar /> 
      <section className="flex justify-center items-center w-full h-full  flex-col pt-[10em] py-[6em] md:py-[10%]">
        <h1 className="capitalize md:text-3xl text-xl font-extrabold ">
          Sign-in to your account
        </h1>

        <form className="flex flex-col justify-center items-center w-full gap-4 mt-2">
          <section className="flex ">
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

          <section className={`${passowordError && "pt-10"}`}>
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
             {loading ? <Spinner /> : "Sign In"}
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
        <section className="flex gap-2 text-lg md:text-xl font-bold pt-10 flex-col md:flex-row text-center">
          <h1>Don’t have an account ? </h1>
          <Link href={routeLinks.signup} className="text-redTheme underline">
            Create Account
          </Link>
        </section>
      </section>
      <Toaster
        position="top-right"
        toastOptions={{ duration: 3000 }}
        reverseOrder
      />
      <Footer />
    </main>
  );
}
