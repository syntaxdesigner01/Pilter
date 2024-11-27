"use client";

import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import SwiperCard from "./SwiperCard";
import "./styles.css";

function SwiperComponent() {
  const items = [
    <SwiperCard title="Home Decor" baseText="HomeDecor" key={"HomeDecor"} />,
    <SwiperCard  title="Women Fashion" baseText="womenFashion" key={"womenFashion"}/>,
    // <SwiperCard title="Men Fashion" baseText="menfashion" key={"menfashion"} />,
    <SwiperCard title="Car" baseText="HomeDecor" key={"Car"} />,
  ];

  return (
    <section>
      <section className="text-center flex flex-col gap-4">
        <h1 className="capitalize text-3xl font-bold">
          get your next big idea
        </h1>
      </section>

      <section className="carousel-container">
        <AliceCarousel
          mouseTracking
          items={items}
          autoPlay
          autoPlayInterval={6000}
          //   fadeOutAnimation
          disableButtonsControls
          infinite
          animationType="fadeout"
          animationDuration={1000}
          activeIndex={1}
        />
      </section>
    </section>
  );
}

export default SwiperComponent;
