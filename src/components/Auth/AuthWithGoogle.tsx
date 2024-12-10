// src/components/Auth/AuthWithGoogle.tsx
import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import {
  signInWithGoogle,
  signOutWithGoogle,
} from "@/utils/AuthProviders/GoogleAuth"; // Import the server action
import { useRouter } from "next/router";
import { routeLinks } from "@/utils/routerLinks";

export default function AuthWithGoogle({ Action }: { Action: string }) {
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent default form submission
    if (Action === "signIn") {
      await signInWithGoogle();
      router.push(routeLinks.chooseInterest);
    }

    if (Action === "signOut") await signOutWithGoogle();
  };

  return (
    <form onSubmit={handleSubmit}>
      <Button
        className="border-2 w-[32em] py-6 rounded-xl text-xl font-bold border-black"
        type="submit"
      >
        <Image src={"/icons/google.svg"} alt={"line"} height={30} width={30} />
        <span>Continue with Google</span>
      </Button>
    </form>
  );
}
