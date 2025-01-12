'use client'
import CustomButton from "@/components/GeneralComponents/CustomButton";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function ErrorPage() {
  const router = useRouter()


  return (
    <section className="w-screen h-screen flex justify-center items-center">
      <section className="flex flex-col justify-center items-center w-full">
        <Image
          src={"/undraw_Cat_epte 3.png"}
          alt=""
          width={400}
          height={400}
          className="w-[400px]"
        />
        ＞﹏＜
        <h1 className="font-bold md:text-3xl text-xl">
          Something went wrong 🤦‍♂️
        </h1>
        <p className="capitalize text-sm py-4">
          check your internet connections and try again
        </p>
        <CustomButton
          color="red"
          extraClass="py-4 h-[20px] font-bold"
          width={"16vw"}
          smWidth={"50vw"}
          click={() => router.back()}
          hover
        >
          Back
        </CustomButton>
      </section>
    </section>
  );
}
