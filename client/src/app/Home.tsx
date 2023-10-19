import BrandShortcutsSectionComponent from "@/components/brand-shortcut/brand-shorcuts-section/BrandShortcutsSectionComponent";
import BannerCarouselComponent from "@/components/carousel/banner-carousel/BannerCarouselComponent";
import ProductsCarouselComponent from "@/components/carousel/products-carousel/ProductsCarouselComponent";
import HomeSectionComponent from "@/components/home-section/HomeSectionComponent";
import BannerCarousel from "@/types/BannerCarousel";
import BrandShortcut from "@/types/BrandShortcut";
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
      permalink: "/producto-1"
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
      permalink: "/producto-2"
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
      permalink: "/producto-3"
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
      permalink: "/producto-4"
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
      permalink: "/producto-5"
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
      permalink: "/producto-6"
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
      permalink: "/producto-7"
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
      permalink: "/producto-8"
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
      permalink: "/producto-9"
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
      permalink: "/producto-10"
    },
  ],
};

const brandsShortcutsMockData: BrandShortcut[] = [
  {
    description: "Descripción de marca 1",
    label: "Marca 1",
    imageUrl: "/mock-images/3.jpg",
  },
  {
    description: "Descripción de marca 2",
    label: "Marca 2",
    imageUrl: "/mock-images/6.jpg",
  },
  {
    description: "Descripción de marca 3",
    label: "Marca 3",
    imageUrl: "/mock-images/7.jpg",
  },
  {
    description: "Descripción de marca 4",
    label: "Marca 4",
    imageUrl: "/mock-images/3.jpg",
  },
  {
    description: "Descripción de marca 5",
    label: "Marca 5",
    imageUrl: "/mock-images/4.jpg",
  },
  {
    description: "Descripción de marca 6",
    label: "Marca 6",
    imageUrl: "/mock-images/9.jpg",
  },
];

const Home = (props: Props) => {
  return (
    <div className="w-full flex justify-center">
      <div className="w-full px-0 md:px-5 lg:max-w-6xl flex flex-col gap-10">
        <BannerCarouselComponent data={carouselMockData} />
        <div className="w-full px-5 md:px-0 flex flex-col gap-14">
          <HomeSectionComponent title="Recomendados">
            <ProductsCarouselComponent
              data={recommendedProductsCarouselMockData}
            />
          </HomeSectionComponent>
          <HomeSectionComponent title="Marcas">
            <BrandShortcutsSectionComponent data={brandsShortcutsMockData} />
          </HomeSectionComponent>
          <HomeSectionComponent title="Lo mas vendido">
            <ProductsCarouselComponent
              data={bestSellersProductsCarouselMockData}
            />
          </HomeSectionComponent>
        </div>
      </div>
    </div>
  );
};

export default Home;
