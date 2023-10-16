"use client";

import Product from "@/types/Product";
import React, { useEffect, useRef, useState } from "react";
import CarouselComponent from "../CarouselComponent";
import ProductCarousel from "@/types/ProductCarousel";
import ProductCardComponent from "@/components/product-card/ProductCardComponent";
import ProductCarouselSlideComponent from "./product-carousel-slide/ProductCarouselSlideComponent";

type Props = {
  data: ProductCarousel;
};

type ProductsCarouselComponentState = {
  width: number;
};

const ProductsCarouselComponent = (props: Props) => {
  const { data } = props;
  const [state, setState] = useState<ProductsCarouselComponentState>({
    width: 0,
  });
  const ref = useRef<HTMLDivElement>(null);
  const refState = useRef<ProductsCarouselComponentState>(state);

  const Functions = {
    SetState(updatedState: ProductsCarouselComponentState) {
      refState.current = updatedState;
      setState(updatedState);
    },
    GetProductCardMaxWidth() {
      if (!refState.current.width) return 0;

      let productCardMaxWidth = refState.current.width / 2;

      if (window.innerWidth >= 1024)
        productCardMaxWidth = refState.current.width / 5;
      else if (window.innerWidth >= 768)
        productCardMaxWidth = refState.current.width / 4;
      else if (window.innerWidth >= 640)
        productCardMaxWidth = refState.current.width / 3;

      return productCardMaxWidth;
    },
    GetSize() {
      if (!ref.current) return null;

      const rect = ref.current.getBoundingClientRect();
      Functions.SetState({
        ...refState.current,
        width: rect.width,
      });
    },
  };

  const Renderer = {
    GhostElement() {
      if (!data.products.length) return <span></span>;

      const productCardMaxWidth = Functions.GetProductCardMaxWidth();

      return (
        <ProductCardComponent
          data={data.products[0]}
          maxWidth={productCardMaxWidth}
        />
      );
    },
    Slides() {
      if (!refState.current.width) return [];
      let cardsPerSlide = 2;

      if (window.innerWidth >= 1024) cardsPerSlide = 5;
      else if (window.innerWidth >= 768) cardsPerSlide = 4;
      else if (window.innerWidth >= 640) cardsPerSlide = 3;

      console.log(window.innerWidth);

      let slidesCount = Math.ceil(data.products.length / cardsPerSlide);
      let slicedProducts: Product[][] = [];
      let slides: React.JSX.Element[] = [];

      for (let _it_ = 0; _it_ < slidesCount; _it_++) {
        let index = _it_ * cardsPerSlide;
        slicedProducts.push(data.products.slice(index, index + cardsPerSlide));
      }

      const productCardMaxWidth = Functions.GetProductCardMaxWidth();

      for (let _it_ = 0; _it_ < slidesCount; _it_++) {
        slides.push(
          <ProductCarouselSlideComponent
            key={_it_}
            data={slicedProducts[_it_]}
            cardMaxWidth={productCardMaxWidth}
          />
        );
      }

      return slides;
    },
  };

  useEffect(() => {
    window.addEventListener("resize", Functions.GetSize);
    Functions.GetSize();

    return () => {
      window.removeEventListener("resize", Functions.GetSize);
    };
  }, []);

  const slides = Renderer.Slides();

  if (!slides.length) return <div ref={ref}></div>;

  return (
    <div ref={ref}>
      <CarouselComponent
        ghostElement={Renderer.GhostElement()}
        slideInterval={data.slideInterval}
        slides={Renderer.Slides()}
      />
    </div>
  );
};

export default ProductsCarouselComponent;
