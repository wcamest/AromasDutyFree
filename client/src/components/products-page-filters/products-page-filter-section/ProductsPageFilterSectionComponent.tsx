import CheckBoxComponent from "@/components/controls/checkbox/CheckBoxComponent";
import ProductFilter from "@/types/ProductFilter";
import React from "react";

type Props = {
  filters: ProductFilter[];
  sectionFilter: ProductFilter;
};

const ProductsPageFilterSectionComponent = (props: Props) => {
  const { filters, sectionFilter } = props;

  const Functions = {
    SubCategories() {
      return filters.filter((filter: ProductFilter) =>
        sectionFilter.subFilters.includes(filter.id)
      );
    },
  };

  const Renderer = {
    SubCategories() {
      const subCategories = Functions.SubCategories();

      return subCategories.map((filter: ProductFilter, key: number) => {
        return <CheckBoxComponent key={key}>{filter.label}</CheckBoxComponent>;
      });
    },
  };

  return (
    <div className="flex flex-col gap-1">
      <h3 className="text-xl">{sectionFilter.label}</h3>
      <div className="flex flex-col">{Renderer.SubCategories()}</div>
    </div>
  );
};

export default ProductsPageFilterSectionComponent;
