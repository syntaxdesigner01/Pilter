"use client";
import React, { useState, useEffect } from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import {
  registerGoogleUser,
  signInWithGoogle,
} from "@/utils/AuthProviders/appAuthCredentials";
import { routeLinks } from "@/utils/routerLinks";
import { useRouter } from "next/navigation";
import { getSession } from "next-auth/react";
import Spinner from "../GeneralComponents/Spinner";
// import ErrorPage from "@/app/404/page";

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
  const [loading, setLoading] = useState<boolean>(false);
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    const fetchSession = async () => {
      const sessionData = await getSession();
      setSession(sessionData as CustomSession);
      const tokenData = localStorage.getItem("token");
      if (tokenData) {
        setToken(tokenData);
      }
    };
    fetchSession();
  }, [router]);

  useEffect(() => {
    const handleUser = async () => {
      setLoading(true);
      if (session?.user) {
        const result = await registerGoogleUser({
          ...session?.user,
          image: session?.user?.image || "",
        });
        // router.push(routeLinks.mainApHome);
        console.log(result);

        setLoading(false);
      } else {
        // router.push(routeLinks.home);
           setLoading(false);
      }
    };

    handleUser();
  }, [session]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    if (window.navigator.onLine) {
      try {
        await signInWithGoogle();
      } catch (error) {
        console.error("Authentication error:", error);
        setLoading(false);
      }
    } else {
      setLoading(false);
      router.push(routeLinks.errorPage);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Button
          className={`border-2 w-[90vw] md:w-[22em] py-6 rounded-xl text-base md:text-xl font-bold border-black ${
            loading && "cursor-not-allowed "
          }`}
          type="submit"
          disabled={loading}
        >
          {loading ? (
            <Spinner color="black" />
          ) : (
            <>
              <Image
                src={"/icons/google.png"}
                alt={"Google logo"}
                height={30}
                width={30}
              />
              <span>Continue with Google</span>
            </>
          )}
        </Button>
      </form>
    </>
  );
}
