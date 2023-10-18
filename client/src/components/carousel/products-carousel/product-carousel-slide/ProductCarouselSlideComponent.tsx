import ProductCardComponent from "@/components/product-card/ProductCardComponent";
import Product from "@/types/Product";
import React from "react";

type Props = {
  data: Product[];
  cardMaxWidth: number,
};

const ProductCarouselSlideComponent = (props: Props) => {
  const { data, cardMaxWidth } = props;

  const Renderer = {
    Cards() {
      return data.map((product: Product, key: number) => {
        return <ProductCardComponent key={key} data={product} maxWidth={cardMaxWidth} />;
      });
    },
  };

  return <div className="grid place-center grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">{Renderer.Cards()}</div>;
};

export default ProductCarouselSlideComponent;
