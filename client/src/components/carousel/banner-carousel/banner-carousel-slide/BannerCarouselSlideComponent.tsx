import BannerCarouselSlide from "@/types/BannerCarouselSlide";
import Image from "next/image";
import React from "react";

type Props = {
  data: BannerCarouselSlide;
};

const BannerCarouselSlideComponent = (props: Props) => {
  const { data } = props;

  return (
    <div className="absolute left-0 top-0 w-full h-full overflow-hidden">
      <Image
        style={{
          backgroundImage: `url(${data.imageUrl})`,
          backgroundSize: "cover",
        }}
        src={data.imageUrl}
        fill={true}
        alt={data.description}
        className="object-contain"
      />
    </div>
  );
};

export default BannerCarouselSlideComponent;
