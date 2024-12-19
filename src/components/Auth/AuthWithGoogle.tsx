"use client";
import React, { useState, useEffect } from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import { signInWithGoogle } from "@/utils/AuthProviders/appAuthCredentials";
import { routeLinks } from "@/utils/routerLinks";
import { useRouter } from "next/navigation";
import { getSession } from "next-auth/react";

interface CustomSession {
  user?: {
    name: string;
    email: string;
    image?: string;
  };
  expires: string;
}

/**
 * AuthWithGoogle component for handling Google authentication.
 *
 * This component provides a button for Google authentication, manages the session state,
 * and handles routing based on the authentication status.
 *
 * @returns {JSX.Element} A form with a button for Google authentication.
 */
export default function AuthWithGoogle() {
  const router = useRouter();
  const [session, setSession] = useState<CustomSession | null>(null);

  useEffect(() => {
    const fetchSession = async () => {
      const sessionData = await getSession();
      setSession(sessionData as CustomSession);

      if (sessionData) {
        router.push(routeLinks.chooseInterest);
        console.log(session);
      } else {
        router.push(routeLinks.signin);
      }
    };
    fetchSession();
  }, [router]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await signInWithGoogle();
    } catch (error) {
      console.error("Authentication error:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Button
        className="border-2 w-[22em] py-6 rounded-xl text-xl font-bold border-black"
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
