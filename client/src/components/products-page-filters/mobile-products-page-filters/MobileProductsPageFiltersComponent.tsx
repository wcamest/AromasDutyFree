import React from "react";
import ProductsPageFiltersComponent from "../ProductsPageFiltersComponent";
import ProductFilter from "@/types/ProductFilter";

type Props = { filters: ProductFilter[]; pageFilterName: string };

const MobileProductsPageFiltersComponent = (props: Props) => {
  const { filters, pageFilterName } = props;

  return (
    <div className="absolute top-0 left-0 w-full h-full bg-white z-30">
      <ProductsPageFiltersComponent
        filters={filters}
        pageFilterName={pageFilterName}
      />
    </div>
  );
};

export default MobileProductsPageFiltersComponent;
