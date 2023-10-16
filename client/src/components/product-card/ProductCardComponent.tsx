import Product from "@/types/Product";
import ProductImage from "@/types/ProductImage";
import Utils from "@/utils/Utils";
import Image from "next/image";
import React from "react";
import ButtonComponent from "../controls/button/ButtonComponent";

type Props = {
  data: Product;
  maxWidth: number;
};

const ProductCardComponent = (props: Props) => {
  const { data } = props;

  const Renderer = {
    FeaturedImage() {
      const featuredImage = data.images.find((image: ProductImage) => {
        return image.featured;
      });

      if (!featuredImage) return null;

      return (
        <Image
          src={featuredImage.url}
          alt={featuredImage.description}
          fill={true}
          className="object-contain"
        />
      );
    },
  };

  return (
    <div
      style={{ maxWidth: `${props.maxWidth}px` }}
      className="p-4 flex flex-col gap-1 border border-solid border-rose-300 rounded-md"
    >
      <div className="w-full relative aspect-square border border-solid border-rose-300 overflow-hidden rounded-md">
        {Renderer.FeaturedImage()}
      </div>
      <h2 className="text-xl">{data.name}</h2>
      <h3>{`$${Utils.FormatCurrency(data.salePrice)}`}</h3>
      <div className="w-full mt-8 flex justify-stretch">
        <ButtonComponent className="w-full">Consultar stock</ButtonComponent>
      </div>
    </div>
  );
};

export default ProductCardComponent;