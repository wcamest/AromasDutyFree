import React, { PropsWithChildren } from "react";

type Props = {
  current?: boolean;
};

const ClientSidePaginationItem = (props: PropsWithChildren<Props>) => {
  const { current } = props;

  return (
    <div
      className={`w-7 md:w-8 h-fit p-1 aspect-square ${
        current ? `bg-rose-500` : "hover:bg-rose-100 active:bg-rose-500"
      } ${
        current ? `text-rose-50` : "text-rose-500 active:text-rose-50"
      } text-xs md:text-sm border border-solid border-rose-500 rounded-full flex justify-center items-center select-none cursor-pointer`}
    >
      {props.children}
    </div>
  );
};

export default ClientSidePaginationItem;
