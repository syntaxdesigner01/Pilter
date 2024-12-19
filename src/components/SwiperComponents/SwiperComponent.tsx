"use client";

import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import SwiperCard from "./SwiperCard";
import "./styles.css";

function SwiperComponent() {
  const items = [
    <SwiperCard title="Home Decor" baseText="HomeDecor" key={"HomeDecor"} />,
    <SwiperCard
      title="Women Fashion"
      baseText="womenFashion"
      key={"womenFashion"}
    />,
    <SwiperCard title="Art" baseText="art" key={"Art"} />,
    <SwiperCard title="Men Fashion" baseText="menfashion" key={"menfashion"} />,
    <SwiperCard title="Artise" baseText="celebrity" key={"Artise"} />,
  ];

  return (
    <section className="px-4 md:px-10 mt-10 md:mt-4">
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
          responsive={{
            0: { items: 1 },
            768: { items: 1 },
            1024: { items: 1 },
          }}  
        />
      </section>
    </section>
  );
}

export default SwiperComponent;
