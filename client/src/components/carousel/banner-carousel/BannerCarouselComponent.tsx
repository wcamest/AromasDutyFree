import BannerCarousel from "@/types/BannerCarousel";
import React from "react";
import CarouselComponent from "../CarouselComponent";
import BannerCarouselSlide from "@/types/BannerCarouselSlide";
import BannerCarouselSlideComponent from "./banner-carousel-slide/BannerCarouselSlideComponent";

type Props = {
  data: BannerCarousel;
};

const BannerCarouselComponent = (props: Props) => {
  const { data } = props;

  const Renderer = {
    Slides() {
      return data.slides.map((slide: BannerCarouselSlide, key: number) => {
        return <BannerCarouselSlideComponent key={key} data={slide} />;
      });
    },
  };

  return (
    <CarouselComponent
      slideInterval={data.slideInterval}
      slides={Renderer.Slides()}
      ghostElement={<div style={{ height: `${data.height}px` }}></div>}
    />
  );
};

export default BannerCarouselComponent;
