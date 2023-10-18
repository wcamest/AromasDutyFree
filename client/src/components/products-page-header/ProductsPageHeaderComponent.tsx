"use client";

import React, { MouseEventHandler } from "react";
import FunnelFillIcon from "../icons/FunnelFillIcon";

type Props = {
  title: string;
  onFilterButtonClick: MouseEventHandler<HTMLDivElement>;
};

const ProductsPageHeaderComponent = (props: Props) => {
  const { title, onFilterButtonClick } = props;

  return (
    <div className="w-full flex flex-col gap-4">
      <span className="w-full border-t border-t-solid border-t-rose-200"></span>
      <div className="flex justify-between items-center text-rose-600">
        <h1 className=" font-bold text-2xl">{title}</h1>
        <div
          className="block lg:hidden scale-150 text-rose-500 z-50"
          onClick={onFilterButtonClick}
        >
          <FunnelFillIcon />
        </div>
      </div>
      <span className="w-full border-t border-t-solid border-t-rose-200"></span>
    </div>
  );
};

export default ProductsPageHeaderComponent;
