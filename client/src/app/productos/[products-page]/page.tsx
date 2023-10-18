import ProductCardComponent from "@/components/product-card/ProductCardComponent";
import Product from "@/types/Product";
import React from "react";

type Props = {};

const productsMockData: Product[] = [
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
  {
    id: "product-11-id",
    description: "product-11-description",
    images: [
      {
        featured: true,
        description: "product-11-image-description",
        url: "/mock-images/5.jpg",
      },
    ],
    name: "Product 11",
    recommended: true,
    salePrice: 150000,
  },
  {
    id: "product-12-id",
    description: "product-12-description",
    images: [
      {
        featured: true,
        description: "product-12-image-description",
        url: "/mock-images/1.jpg",
      },
    ],
    name: "Product 12",
    recommended: true,
    salePrice: 150000,
  },
];

const page = (props: Props) => {
  const Renderer = {
    Cards() {
      return productsMockData.map((product: Product, key: number) => {
        return <ProductCardComponent key={key} data={product} />;
      });
    },
  };

  return (
    <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-5 auto-rows-auto">
      {Renderer.Cards()}
    </div>
  );
};

export default page;
