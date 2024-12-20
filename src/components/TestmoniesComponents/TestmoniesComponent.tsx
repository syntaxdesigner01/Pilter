"use client";

import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import TestimonieCard from "./TestimonieCard";
import { useEffect, useRef } from "react";
import "./styles.css";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import AOS from "aos";
import "aos/dist/aos.css";

export default function TestmoniesComponent() {
  const items = [
    <TestimonieCard key="1" />,
    <TestimonieCard key="2" />,
    <TestimonieCard key="3" />,
  ];

    useEffect(() => {
      AOS.init({
        duration: 600, // Animation duration
        easing: "ease-in-sine",
        once: false,
      });
    }, []);


  const carouselRef = useRef<AliceCarousel | null>(null);

  const handlePrev = () => {
    if (carouselRef.current) {
      carouselRef.current.slidePrev();
    }
  };

  const handleNext = () => {
    if (carouselRef.current) {
      carouselRef.current.slideNext();
    }
  };

  return (
    <section
      className="px-2 md:px-10 py-20 main pb-[6em]"
      // data-aos="fade-up"
      // data-aos-easing="ease-in-out"
      // data-aos-duration="1000"
      // data-aos-delay="200"
      // data-aos-anchor-placement="top-bottom"
      // data-aos-offset="0"
      // data-aos-mirror="false"
      // data-aos-repeat="false"
      // data-aos-group-delay="0s"
      // data-aos-once="false"
    >
      <section className="carousel-container relative  ">
        <AliceCarousel
          ref={carouselRef}
          mouseTracking
          items={items}
          autoPlay
          autoPlayInterval={3000}
          disableButtonsControls
          infinite
          animationType="fadeout"
          animationDuration={1000}
        />
        <button
          className="carousel-control left hidden md:block"
          onClick={handlePrev}
        >
          <FaAngleLeft />
        </button>
        <button
          className="carousel-control right hidden md:block"
          onClick={handleNext}
        >
          <FaAngleRight />
        </button>
      </section>
    </section>
  );
}
