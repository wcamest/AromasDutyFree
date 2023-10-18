"use client";

import DesktopProductsPageFiltersComponent from "@/components/products-page-filters/desktop-products-page-filters/DesktopProductsPageFiltersComponent";
import MobileProductsPageFiltersComponent from "@/components/products-page-filters/mobile-products-page-filters/MobileProductsPageFiltersComponent";
import ProductsPageHeaderComponent from "@/components/products-page-header/ProductsPageHeaderComponent";
import ProductFilter from "@/types/ProductFilter";
import React, { PropsWithChildren, useState } from "react";

type Props = {};

const productFiltersMockData: ProductFilter[] = [
  {
    id: "root-filter",
    label: "root",
    name: "root",
    root: true,
    subFilters: ["pages-filter", "brands-filter"],
  },
  {
    id: "pages-filter",
    label: "pages",
    name: "pages",
    pagesContainer: true,
    subFilters: ["perfumeria-filter"],
  },
  {
    id: "brands-filter",
    label: "brands",
    name: "brands",
    brandsContainer: true,
    subFilters: [],
  },
  {
    id: "perfumería-filter",
    label: "Perfumería",
    name: "perfumería",
    page: true,
    subFilters: ["genero-filter", "aroma-filter"],
  },
  {
    id: "genero-filter",
    label: "Genero",
    name: "genero",
    pageCategory: true,
    subFilters: ["hombre-filter", "mujer-filter"],
  },
  {
    id: "hombre-filter",
    label: "Hombre",
    name: "hombre",
    pageSubCategory: true,
    subFilters: [],
  },
  {
    id: "mujer-filter",
    label: "Mujer",
    name: "mujer",
    pageSubCategory: true,
    subFilters: [],
  },
  {
    id: "aroma-filter",
    label: "Aroma",
    name: "aroma",
    pageCategory: true,
    subFilters: ["aroma-dulce-filter", "aroma-ácido-filter"],
  },
  {
    id: "aroma-dulce-filter",
    label: "Dulce",
    name: "aroma-dulce",
    pageSubCategory: true,
    subFilters: [],
  },
  {
    id: "aroma-ácido-filter",
    label: "Ácido",
    name: "aroma-ácido",
    pageSubCategory: true,
    subFilters: [],
  },
];

const pageFilterMockData: string = "perfumería";

const ProductsLayout = (props: PropsWithChildren<Props>) => {
  const [state, setState] = useState({
    filtersPanelVisible: false,
  });

  return (
    <div className="w-full h-full flex justify-center">
      <div className="w-full min-h-full max-w-6xl p-5 flex flex-col gap-4">
        <ProductsPageHeaderComponent
          title="Perfumería"
          onFilterButtonClick={() => {
            setState({
              filtersPanelVisible: !state.filtersPanelVisible,
            });
          }}
        />
        <div className="relative w-full flex">
          <DesktopProductsPageFiltersComponent
            filters={productFiltersMockData}
            pageFilterName={pageFilterMockData}
          />
          {state.filtersPanelVisible && (
            <MobileProductsPageFiltersComponent
              filters={productFiltersMockData}
              pageFilterName={pageFilterMockData}
            />
          )}
          <div className="w-full">{props.children}</div>
        </div>
      </div>
    </div>
  );
};

export default ProductsLayout;
