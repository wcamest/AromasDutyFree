import NavBarMenuItem from "@/types/NavBarMenuItem";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import DesktopNavBarComponent from "./desktop-navbar/DesktopNavBarComponent";
import MobileNavBarComponent from "./mobile-navbar/MobileNavBarComponent";

type Props = {};

const mockData: NavBarMenuItem[] = [
  {
    label: "Perfumería",
    url: "/productos/perfumería",
  },
  {
    label: "Skin Care",
    url: "/productos/skin_care",
  },
  {
    label: "Body Care",
    url: "/productos/body_care",
  },
  {
    label: "Niños",
    url: "/productos/niños",
  },
];

const NavBarComponent = (props: Props) => {
  return (
    <div className="w-full flex justify-center">
      <div className="w-full max-w-6xl p-4 flex justify-between items-center">
        <Link href={"/"}>
          <Image
            src={"/aromas-logo.svg"}
            alt="Aromas Duty Free Logo"
            width={150}
            height={49}
          />
        </Link>
        <DesktopNavBarComponent menuItems={mockData} />
        <MobileNavBarComponent menuItems={mockData} />
      </div>
    </div>
  );
};

export default NavBarComponent;
