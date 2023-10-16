import BannerCarouselComponent from "@/components/carousel/banner-carousel/BannerCarouselComponent";
import ProductsCarouselComponent from "@/components/carousel/products-carousel/ProductsCarouselComponent";
import HomeSectionComponent from "@/components/home-section/HomeSectionComponent";
import BannerCarousel from "@/types/BannerCarousel";
import Product from "@/types/Product";
import ProductCarousel from "@/types/ProductCarousel";
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

const recommendedProductsCarouselMockData: ProductCarousel = {
  slideInterval: 5,
  products: [
    {
      id: "product-1-id",
      description: "product-1-description",
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
    },
    {
      id: "product-2-id",
      description: "product-2-description",
      images: [
        {
          featured: true,
          description: "product-2-image-description",
          url: "/mock-images/2.jpg",
        },
      ],
      name: "Product 2",
      recommended: true,
      salePrice: 150000,
    },
    {
      id: "product-3-id",
      description: "product-3-description",
      images: [
        {
          featured: true,
          description: "product-3-image-description",
          url: "/mock-images/3.jpg",
        },
      ],
      name: "Product 3",
      recommended: true,
      salePrice: 150000,
    },
    {
      id: "product-4-id",
      description: "product-4-description",
      images: [
        {
          featured: true,
          description: "product-4-image-description",
          url: "/mock-images/4.jpg",
        },
      ],
      name: "Product 4",
      recommended: true,
      salePrice: 150000,
    },
    {
      id: "product-5-id",
      description: "product-5-description",
      images: [
        {
          featured: true,
          description: "product-5-image-description",
          url: "/mock-images/5.jpg",
        },
      ],
      name: "Product 5",
      recommended: true,
      salePrice: 150000,
    },
  ],
};

const bestSellersProductsCarouselMockData: ProductCarousel = {
  slideInterval: 5,
  products: [
    {
      id: "product-6-id",
      description: "product-6-description",
      images: [
        {
          featured: true,
          description: "product-6-image-description",
          url: "/mock-images/6.jpg",
        },
      ],
      name: "Product 6",
      recommended: true,
      salePrice: 150000,
    },
    {
      id: "product-7-id",
      description: "product-7-description",
      images: [
        {
          featured: true,
          description: "product-7-image-description",
          url: "/mock-images/7.jpg",
        },
      ],
      name: "Product 7",
      recommended: true,
      salePrice: 150000,
    },
    {
      id: "product-8-id",
      description: "product-8-description",
      images: [
        {
          featured: true,
          description: "product-8-image-description",
          url: "/mock-images/8.jpg",
        },
      ],
      name: "Product 8",
      recommended: true,
      salePrice: 150000,
    },
    {
      id: "product-9-id",
      description: "product-9-description",
      images: [
        {
          featured: true,
          description: "product-9-image-description",
          url: "/mock-images/9.jpg",
        },
      ],
      name: "Product 9",
      recommended: true,
      salePrice: 150000,
    },
    {
      id: "product-10-id",
      description: "product-10-description",
      images: [
        {
          featured: true,
          description: "product-10-image-description",
          url: "/mock-images/10.jpg",
        },
      ],
      name: "Product 10",
      recommended: true,
      salePrice: 150000,
    },
  ],
};

const Home = (props: Props) => {
  return (
    <div className="w-full flex justify-center">
      <div className="w-full lg:max-w-6xl flex flex-col gap-5">
        <BannerCarouselComponent data={carouselMockData} />
        <HomeSectionComponent title="Recomendados">
          <ProductsCarouselComponent
            data={recommendedProductsCarouselMockData}
          />
        </HomeSectionComponent>
        <HomeSectionComponent title="Marcas"></HomeSectionComponent>
        <HomeSectionComponent title="Lo mas vendido">
          <ProductsCarouselComponent
            data={bestSellersProductsCarouselMockData}
          />
        </HomeSectionComponent>
      </div>
    </div>
  );
};

export default Home;
