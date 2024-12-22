'use client'
import { signOutWithGoogle } from "@/utils/AuthProviders/appAuthCredentials";
import CustomButton from "../GeneralComponents/CustomButton";


export default function LogoutWithGooglr() {
  return <CustomButton color="black" hover className="bg" onClick={() => signOutWithGoogle()}>log out</CustomButton>;
}
