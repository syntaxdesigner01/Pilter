"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import CustomButton from "../GeneralComponents/CustomButton";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import AOS from "aos";
import "aos/dist/aos.css";
export default function HomeBodyComponent() {
  const [showArrowButton1, setShowArrowButton1] = useState<boolean>(false);
  const [showArrowButton2, setShowArrowButton2] = useState<boolean>(false);

  useEffect(() => {
    AOS.init({
      duration: 600, // Animation duration
      easing: "ease-in-sine",
      once: false,
    });
  }, []);

  return (
    <section className="px-10 pt-20 flex flex-col gap-20 justify-center items-center w-full">
      <aside
        className="flex justify-between items-center w-full"
        data-aos="fade-up"
        data-aos-easing="ease-in-out"
        data-aos-duration="1000"
        data-aos-delay="200"
        data-aos-anchor-placement="top-bottom"
        data-aos-offset="0"
        data-aos-mirror="false"
        data-aos-repeat="false"
        data-aos-group-delay="0s"
        data-aos-once="false"
      >
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
          <CustomButton
            color="#CC1414"
            w={"200px"}
            onMouseEnter={() => setShowArrowButton1(true)}
            onMouseLeave={() => setShowArrowButton1(false)}
            hover
          >
            Explore {showArrowButton1 && <HiOutlineArrowLongRight />}
          </CustomButton>
        </section>
      </aside>

      <aside
        className="text-left leading-relaxed flex  gap-4 justify-center items-center"
        data-aos="fade-up"
        data-aos-easing="ease-in-out"
        data-aos-duration="600"
        data-aos-delay="100"
        data-aos-anchor-placement="top-bottom"
        data-aos-offset="0"
        data-aos-mirror="false"
        data-aos-repeat="false"
        data-aos-group-delay="0s"
        data-aos-once="false"
      >
        <section>
          <h1 className="font-bold text-3xl">AI Generative Images</h1>
          <p className="w-[70%] text-xl py-4">
            &quot;Unleash your creativity with Kitty AI—generate stunning images
            of your choice, absolutely free!&quot;
          </p>
          <CustomButton
            color="#CC1414"
            w={"200px"}
            onMouseEnter={() => setShowArrowButton2(true)}
            onMouseLeave={() => setShowArrowButton2(false)}
            hover
          >
            Explore Kitty
            {showArrowButton2 && <HiOutlineArrowLongRight />}
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
