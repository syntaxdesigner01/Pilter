"use client";

import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import TestimonieCard from "./TestimonieCard";
import { useRef } from "react";
import "./styles.css";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

export default function TestmoniesComponent() {
  const items = [
    <TestimonieCard key="1" />,
    <TestimonieCard key="2" />,
    <TestimonieCard key="3" />,
  ];


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
    <section className="px-10 py-20 main pb-[20em]">
      <section className="carousel-container relative ">
        <AliceCarousel
          ref={carouselRef}
          mouseTracking
          items={items}
          autoPlay
          autoPlayInterval={3000}
          disableButtonsControls
          infinite
          animationType="slide"
          animationDuration={1000}
        />
        <button className="carousel-control left" onClick={handlePrev}>
          <FaAngleLeft />
        </button>
        <button className="carousel-control right" onClick={handleNext}>
          <FaAngleRight />
        </button>
      </section>
    </section>
  );
}
