import BannerCarouselComponent from "@/components/carousel/banner-carousel/BannerCarouselComponent";
import BannerCarousel from "@/types/BannerCarousel";
import React from "react";

type Props = {};

const carouselMockData: BannerCarousel = {
  height: 300,
  slideInterval: 5,
  slides: [
    {
      description: "Banner 1 description",
      imageUrl: "/mock-images/1.jpg",
    },
    {
      description: "Banner 2 description",
      imageUrl: "/mock-images/2.jpg",
    },
    {
      description: "Banner 3 description",
      imageUrl: "/mock-images/3.jpg",
    },
    {
      description: "Banner 4 description",
      imageUrl: "/mock-images/4.jpg",
    },
    {
      description: "Banner 5 description",
      imageUrl: "/mock-images/5.jpg",
    },
  ],
};

const Home = (props: Props) => {
  return (
    <div className="w-full flex justify-center">
      <div className="w-full max-w-6xl flex flex-col gap-5">
        <BannerCarouselComponent data={carouselMockData} />
       
      </div>
    </div>
  );
};

export default Home;
