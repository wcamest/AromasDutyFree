import FunnelFillIcon from "@/components/icons/FunnelFillIcon";
import ProductsPageFiltersComponent from "@/components/products-page-filters/ProductsPageFiltersComponent";
import DesktopProductsPageFiltersComponent from "@/components/products-page-filters/desktop-products-page-filters/DesktopProductsPageFiltersComponent";
import MobileProductsPageFiltersComponent from "@/components/products-page-filters/mobile-products-page-filters/MobileProductsPageFiltersComponent";
import ProductsPageHeaderComponent from "@/components/products-page-header/ProductsPageHeaderComponent";
import ProductFilter from "@/types/ProductFilter";
import React, { PropsWithChildren } from "react";
import ProductsLayout from "./ProductsLayout";

type Props = {};

const layout = (props: PropsWithChildren<Props>) => {
  return <ProductsLayout>{props.children}</ProductsLayout>;
};

export default layout;
