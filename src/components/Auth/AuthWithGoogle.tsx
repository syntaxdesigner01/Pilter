"use client";
import React, { useState, useEffect } from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import {
  signInWithGoogle,
  signOutWithGoogle,
} from "@/utils/AuthProviders/GoogleAuth";
import { routeLinks } from "@/utils/routerLinks";
import { useRouter } from "next/navigation";
import { getSession, Session } from "next-auth/react";

interface AuthWithGoogleProps {
  Action: "signIn" | "signOut";
}

export default function AuthWithGoogle({ Action }: AuthWithGoogleProps) {
  const router = useRouter();
  const [userSession, setSession] = useState<Session | null>(null);

  useEffect(() => {
    const fetchSession = async () => {
      const sessionData = await getSession();
      setSession(sessionData);
      if (sessionData) {
        // router.push(routeLinks.chooseInterest);
        console.log(sessionData.user)
      } else {
        router.push(routeLinks.signup);
      }
    };
    fetchSession();
  }, [router]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      if (Action === "signIn") {
        await signInWithGoogle();
      } else if (Action === "signOut") {
        await signOutWithGoogle();
      }
    } catch (error) {
      console.error("Authentication error:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Button
        className="border-2 w-[32em] py-6 rounded-xl text-xl font-bold border-black"
        type="submit"
      >
        <Image
          src={"/icons/google.svg"}
          alt={"Google logo"}
          height={30}
          width={30}
        />
        <span>Continue with Google</span>
      </Button>
    </form>
  );
}
