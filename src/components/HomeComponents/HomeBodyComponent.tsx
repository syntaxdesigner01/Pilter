import Image from 'next/image'
import React from 'react'
import CustomButton from '../GeneralComponents/CustomButton';

export default function HomeBodyComponent() {
  return (
    <section className="px-10 pt-20 flex flex-col gap-20 justify-center items-center w-full">
      <aside className="flex justify-between items-center w-full">
        <Image
          src={"/searchIdeas.png"}
          alt="searchIdeas"
          width={1000}
          height={1000}
          className="w-[500px] "
        />

        <section className="text-center leading-relaxed flex flex-col gap-4 justify-center items-center">
          <h1 className="font-bold text-3xl">Search for an idea</h1>
          <p className="w-[70%] text-xl">
            &quot;Spark your creativity by exploring over 1,000 similar images
            inspired by your idea and others&apos; work.&quot;
          </p>
          <CustomButton color="#CC1414" w={"200px"}>
            Explore
          </CustomButton>
        </section>
      </aside>

      <aside className="text-left leading-relaxed flex  gap-4 justify-center items-center">
        <section>
          <h1 className="font-bold text-3xl">AI Generative Images</h1>
          <p className="w-[70%] text-xl py-4">
            &quot;Unleash your creativity with Kitty AI—generate stunning images
            of your choice, absolutely free!&quot;
          </p>
          <CustomButton color="#CC1414" w={"200px"}>
            Explore Kitty
          </CustomButton>
        </section>
        <Image
          src={"/KittyAI.png"}
          alt="searchIdeas"
          width={1500}
          height={1500}
          className="w-[600px] shadow-md "
        />
      </aside>
    </section>
  );
}
