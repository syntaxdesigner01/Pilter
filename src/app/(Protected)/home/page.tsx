"use client";

import { useEffect, useState } from "react";
import { getSession } from "next-auth/react";
import { Session } from "next-auth";
import { IoLogoOctocat } from "react-icons/io";
import SignInPage from "@/app/Auth/signin/page";
import KittyAi from "../kittyAi/page";

export default function HomePage() {
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);
  const [token, setToken] = useState<string | null>(null); // Initialize as null

  useEffect(() => {}, [token, session]);

  useEffect(() => {
    const fetchSession = async () => {
      const sessionData = await getSession();
      setSession(sessionData);
      setLoading(false);
    };

    fetchSession();
  }, []);

  useEffect(() => {
    const tokenData = localStorage.getItem("token");
    if (tokenData) {
      setToken(tokenData);
    }
  }, []);

  if (loading) {
    return (
      <section className="flex w-screen h-screen flex-col justify-center items-center ">
        <IoLogoOctocat className="text-[150px] text-gray-600" />
      </section>
    );
  }

  if (session || token) {
    return <KittyAi />;
  } else {
    return <SignInPage />;
  }
}
