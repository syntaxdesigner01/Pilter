"use client";
import AuthNavBar from "@/components/Auth/AuthNavBar";
import { Button } from "@/components/ui/button";
import { all_interest } from "@/utils/interest";
import React, { useState } from "react";
import { RxSlash } from "react-icons/rx";
import toast, { Toaster } from "react-hot-toast";
import Footer from "@/components/GeneralComponents/Footer";
import CustomButton from "@/components/GeneralComponents/CustomButton";
import { useRouter } from "next/navigation";
import { routeLinks } from "@/utils/routerLinks";

export default function ChooseInterest() {
  const [selected, setSelected] = useState<string[]>([]);

  const route = useRouter()

  const handleSelectItems = (item: string) => {
    if (selected.includes(item)) {
      setSelected(selected.filter((i) => i !== item));
    } else {
    
      if (selected.length === 5){
        toast.error("You can't select more than 5 interests", {
          duration: 2000,
        });
        return;
      }else{
          setSelected([...selected, item]);
      }
    }
  };

  const handleContinue=()=>{
    if(selected.length ===0){
      toast.error("Please select an Intrest")
    }else{
      route.push(routeLinks.mainApHome)
    }
  }
  

  return (
    <>
      <AuthNavBar />

      <main className="pt-[10em] py-[6em] md:py-[10%] md:px-10 px-4">
        <section className="flex items-center justify-end font-extrabold text-xl md:text-2xl">
          <span>{selected.length}</span>
          <RxSlash className="text-xl md:text-3xl" />
          <span>5</span>
        </section>

        <section className="pt-10 text-center font-extrabold text-xl md:text-2xl">
          <h1>Let’s know your interest</h1>
        </section>

        <section className="grid grid-cols-3 md:grid-cols-4 pt-10 w-full justify-center items-center gap-6">
          {all_interest.map((interest) => {
            return (
              <div key={interest} className="flex justify-center items-center w-full">
                <Button
                  className={`w-[30vw] md:w-[20vw] p-6 border-[0.2px] text-sm md:text-xl border-black rounded-xl font-bold hover:bg-black hover:text-white ${
                    selected.includes(interest) ? "bg-black text-white" : ""
                  }`}
                  variant={"solid"}
                  onClick={() => handleSelectItems(interest)}
                >
                  {interest}
                </Button>
              </div>
            );
          })}
          <Toaster position="top-center" />
        </section>

        <section className="flex justify-center items-center mt-20">
          <CustomButton
            color="black"
            hover
            rounded={"md"}
            w={"20em"}
            click={() => handleContinue()}
          >
            Continue
          </CustomButton>
        </section>
      </main>
      <Footer />
    </>
  );
}
