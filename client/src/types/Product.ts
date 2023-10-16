import ProductImage from "./ProductImage";

export default interface Product {
  id: string;
  name: string;
  salePrice: number;
  description: string;
  recommended: boolean;
  images: ProductImage[];
}
