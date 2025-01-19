"use client";
import { useEffect } from "react";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import { routeLinks } from "@/utils/routerLinks";

const VerifyCred = () => {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      toast.error("Session expired, please sign in again.");
      router.push(routeLinks.signin);
    }
  }, [router]);

  return null;
};

export default VerifyCred;
