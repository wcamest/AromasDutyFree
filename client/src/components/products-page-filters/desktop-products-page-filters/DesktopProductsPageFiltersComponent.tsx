import React from "react";
import ProductsPageFiltersComponent from "../ProductsPageFiltersComponent";
import ProductFilter from "@/types/ProductFilter";

type Props = {
  filters: ProductFilter[];
  pageFilterName: string;
};

const DesktopProductsPageFiltersComponent = (props: Props) => {
  const { filters, pageFilterName } = props;

  return (
    <div className="hidden lg:block">
      <div
        style={{ height: "calc(100vh - 112px)" }}
        className="w-60 flex flex-col gap-5"
      >
        <h2 className="font-semibold text-xl">Filtros</h2>
        <ProductsPageFiltersComponent
          filters={filters}
          pageFilterName={pageFilterName}
        />
      </div>
    </div>
  );
};

export default DesktopProductsPageFiltersComponent;
