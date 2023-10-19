import ButtonComponent from "@/components/controls/button/ButtonComponent";
import Product from "@/types/Product";
import Utils from "@/utils/Utils";
import Image from "next/image";
import React from "react";

type Props = {};

const productMockData: Product = {
  id: "product-1-id",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem ea asperiores dolorum ipsam consectetur ipsum perspiciatis, illo quidem quod. Minus dolores ullam mollitia quia possimus magnam aut iure sint quasi!",
  images: [
    {
      featured: true,
      description: "product-1-image-description",
      url: "/mock-images/1.jpg",
    },
  ],
  name: "Product 1",
  recommended: true,
  salePrice: 150000,
  permalink: "/producto-1",
};

const page = (props: Props) => {
  return (
    <div className="w-full p-5 md:py-28 flex justify-center">
      <div className="w-full max-w-6xl flex justify-center items-center">
        <div className="w-full flex flex-col md:flex-row gap-10">
          <div className="w-full flex-col gap-5">
            <div className="w-full relative aspect-square overflow-hidden rounded-md">
              <Image
                src={productMockData.images[0].url}
                alt={"testing img"}
                fill={true}
                className="object-contain"
              />
            </div>
          </div>
          <div className="w-full flex flex-col gap-5">
            <h1 className="text-4xl text-rose-600">{productMockData.name}</h1>
            <h2 className="font-bold text-5xl text-rose-600">
              {"$"}
              {Utils.FormatCurrency(productMockData.salePrice)}
            </h2>
            <ButtonComponent>Consultar stock</ButtonComponent>
            <span className="w-full border-t border-t-solid border-t-pink-300"></span>
            <span className="text-rose-600">Descripción</span>
            <p>{productMockData.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
