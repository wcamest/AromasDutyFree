"use client";

import MenuIcon from "@/components/icons/MenuIcon";
import NavBarMenuItem from "@/types/NavBarMenuItem";
import Link from "next/link";
import React, { useState } from "react";

type Props = {
  menuItems: NavBarMenuItem[];
};

const MobileNavBarComponent = (props: Props) => {
  const { menuItems } = props;

  const [state, setState] = useState({
    visible: false,
  });

  const Renderer = {
    MenuItems() {
      return menuItems.map((menuItem: NavBarMenuItem, key: number) => {
        return (
          <Link
            key={key}
            href={menuItem.url}
            className="hover:underline hover:text-rose-500"
          >
            {menuItem.label}
          </Link>
        );
      });
    },
  };

  return (
    <div className="relative flex lg:hidden">
      <div
        className="scale-150 text-rose-500 z-50"
        onClick={() => {
          setState({
            ...state,
            visible: !state.visible,
          });
        }}
      >
        <div className="scale-150">
          <MenuIcon />
        </div>
      </div>
      {state.visible && (
        <div
          className="fixed w-full h-screen left-0 top-0 overflow-hidden z-40"
          onClick={() => {
            setState({
              ...state,
              visible: false,
            });
          }}
        >
          <div className="relative w-full h-full pt-20">
            <div className="relative w-full h-full bg-white overflow-hidden">
              <div className="w-full h-full px-3 py-2 overflow-auto flex flex-col gap-2">
                {Renderer.MenuItems()}
                <span className="w-full border-t border-t-solid border-t-rose-500"></span>
                <Link
                  href={"/login"}
                  className="hover:underline hover:text-rose-500"
                >
                  Iniciar sesión
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileNavBarComponent;
