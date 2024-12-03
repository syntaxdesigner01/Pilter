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

export default function ChooseInterest() {
  const [selected, setSelected] = useState<string[]>([]);

  const route = useRouter()

  console.log(selected);
  console.log(selected.length);

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

  return (
    <>
      <AuthNavBar />

      <main className="py-[10%] px-20">
        <section className="flex items-center justify-end font-extrabold text-2xl">
          <span>{selected.length}</span>
          <RxSlash className="text-3xl" />
          <span>5</span>
        </section>

        <section className="pt-10 text-center font-extrabold text-2xl">
          <h1>Let’s know your interest</h1>
        </section>

        <section className="grid grid-cols-4 pt-10 w-full justify-center items-center gap-6">
          {all_interest.map((interest) => {
            return (
              <div key={interest} className="flex justify-center items-center">
                <Button
                  className={`w-[14em] p-6 border-[0.2px] border-black rounded-xl font-bold hover:bg-black hover:text-white ${
                    selected.includes(interest) ? "bg-black text-white" : ""
                  }`}
                  variant={"solid"}
                  onClick={() => handleSelectItems(interest)} // Use the handleSelectItems function
                >
                  {interest}
                </Button>
              </div>
            );
          })}
          <Toaster position="top-center" />
        </section>

        <section className="flex justify-center items-center mt-20">
   
          <CustomButton color="black" hover rounded={'md'} w={'20em'} router={()=>route.push('/')}>Continue</CustomButton>
        </section>
      </main>
      <Footer />
    </>
  );
}
