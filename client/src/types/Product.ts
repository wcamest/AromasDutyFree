import ProductImage from "./ProductImage";

export default interface Product {
  id: string;
  name: string;
  salePrice: number;
  permalink: string;
  description: string;
  recommended: boolean;
  images: ProductImage[];
}
