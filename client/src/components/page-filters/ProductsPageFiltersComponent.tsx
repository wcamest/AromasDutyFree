"use client";

import ProductFilter from "@/types/ProductFilter";
import React from "react";
import ProductsPageFilterSectionComponent from "./page-filter-section/ProductsPageFilterSectionComponent";

type Props = {
  filters: ProductFilter[];
  pageFilterName: string;
};

const ProductsPageFiltersComponent = (props: Props) => {
  const { filters, pageFilterName } = props;

  const Functions = {
    Categories() {
      const pageFilter = filters.find(
        (filter: ProductFilter) => filter.name === pageFilterName
      );

      if (!pageFilter) return [];

      return filters.filter((filter: ProductFilter) =>
        pageFilter.subFilters.includes(filter.id)
      );
    },
  };

  const Renderer = {
    FiltersSections() {
      const categories = Functions.Categories();

      return categories.map((filter: ProductFilter, key: number) => {
        return (
          <ProductsPageFilterSectionComponent
            key={key}
            filters={filters}
            sectionFilter={filter}
          />
        );
      });
    },
  };

  return <div className="flex flex-col gap-3">{Renderer.FiltersSections()}</div>;
};

export default ProductsPageFiltersComponent;
