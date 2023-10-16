import NavBarMenuItem from "@/types/NavBarMenuItem";
import Link from "next/link";
import React from "react";

type Props = {
  menuItems: NavBarMenuItem[];
};

const DesktopNavBarComponent = (props: Props) => {
  const { menuItems } = props;

  const Renderer = {
    MenuItems() {
      return menuItems.map((menuItem: NavBarMenuItem, key: number) => {
        return (
          <Link key={key} href={menuItem.url} className="hover:underline hover:text-rose-500">
            {menuItem.label}
          </Link>
        );
      });
    },
  };
  
  return <div className="hidden lg:flex gap-5">
    <div className="flex gap-5">{Renderer.MenuItems()}</div>
    <span className="border-l border-l-solid border-l-rose-500"></span>
    <Link href={"/login"} className="hover:underline hover:text-rose-500">Iniciar sesión</Link>
  </div>;
};

export default DesktopNavBarComponent;
