"use client";

import React from "react";
import CaretLeftFillIcon from "../icons/CaretLeftFillIcon";
import CaretRightFillIcon from "../icons/CaretRightFillIcon";
import ClientSidePaginationItem from "./ClientSidePaginationItem";

type Props = {
  page: number;
  pageCount: number;
};

const ClientSidePagination = (props: Props) => {
  const { page, pageCount } = props;

  const Functions = {
    LeftSideEllipsis() {
      return pageCount > 5 && page > 5;
    },
    RightSideEllipsis() {
      return pageCount > 5 && page <= pageCount - 5;
    },
  };

  const Renderer = {
    FirstItem() {
      if (pageCount > 5 && page > 5)
        return (
          <ClientSidePaginationItem current={false}>1</ClientSidePaginationItem>
        );
    },
    LastItem() {
      if (pageCount > 5 && page <= pageCount - 5)
        return (
          <ClientSidePaginationItem current={false}>
            {pageCount}
          </ClientSidePaginationItem>
        );
    },
    Items() {
      let items: React.JSX.Element[] = [];

      if (pageCount <= 5) {
        for (let _it_ = 0; _it_ < pageCount; _it_++) {
          items.push(
            <ClientSidePaginationItem key={_it_} current={_it_ === page}>
              {_it_ + 1}
            </ClientSidePaginationItem>
          );
        }

        return items;
      }

      if (page < 4) {
        for (let _it_ = 0; _it_ < 5; _it_++) {
          let _index = _it_;
          items.push(
            <ClientSidePaginationItem key={_it_} current={_index === page}>
              {_it_ + 1}
            </ClientSidePaginationItem>
          );
        }
        return items;
      }

      if (page > pageCount - 5) {
        for (let _it_ = 0; _it_ < 5; _it_++) {
          let _index = _it_ + (pageCount - 5);
          items.push(
            <ClientSidePaginationItem key={_it_} current={_index === page}>
              {pageCount - 5 + (_it_ + 1)}
            </ClientSidePaginationItem>
          );
        }

        return items;
      }

      for (let _it_ = -2; _it_ < 3; _it_++) {
        let _index = page + 1 + _it_;
        items.push(
          <ClientSidePaginationItem key={_it_ + 2} current={_it_ === 0}>
            {_index}
          </ClientSidePaginationItem>
        );
      }

      return items;
    },
  };

  return (
    <div className="w-full p-5 flex justify-center">
      <div className="w-fit h-fit flex justify-between gap-1 md:gap-2">
        <ClientSidePaginationItem>
          <CaretLeftFillIcon />
        </ClientSidePaginationItem>
        {Renderer.FirstItem()}
        {Functions.LeftSideEllipsis() && <span>...</span>}
        {Renderer.Items()}
        {Functions.RightSideEllipsis() && <span>...</span>}
        {Renderer.LastItem()}
        <ClientSidePaginationItem>
          <CaretRightFillIcon />
        </ClientSidePaginationItem>
      </div>
    </div>
  );
};

export default ClientSidePagination;
