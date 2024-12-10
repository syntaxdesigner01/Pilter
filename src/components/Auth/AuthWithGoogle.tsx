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

/**
 * A functional component that handles user authentication with Google.
 *
 * @param Action - Determines the action to be performed. It can be either "signIn" or "signOut".
 *
 * @returns A form with a button to initiate the specified action with Google.
 *
 * @remarks
 * This component uses Next.js' `useRouter` hook to navigate between different routes.
 * It also utilizes the `useState` hook to manage the user session state.
 * The `useEffect` hook is used to fetch the user session and navigate to the appropriate route based on the session status.
 * The `handleSubmit` function is called when the form is submitted. It prevents the default form submission behavior,
 * and then calls the appropriate authentication function based on the `Action` prop.
 * If an error occurs during the authentication process, it is logged to the console.
 */

 
export default function AuthWithGoogle({ Action }: AuthWithGoogleProps) {
  const router = useRouter();
  const [userSession, setSession] = useState<Session | null>(null);

  useEffect(() => {
    const fetchSession = async () => {
      const sessionData = await getSession();
      setSession(sessionData);
      if (sessionData) {
        router.push(routeLinks.chooseInterest);
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

