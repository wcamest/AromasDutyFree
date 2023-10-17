import BrandShortcut from "@/types/BrandShortcut";
import React from "react";
import BrandShortcutComponent from "../BrandShortcutComponent";

type Props = {
  data: BrandShortcut[];
};

const BrandShortcutsSectionComponent = (props: Props) => {
  const { data } = props;

  const Renderer = {
    BrandShortcuts() {
      return data.map((shortcut: BrandShortcut, key: number) => {
        return <BrandShortcutComponent key={key} data={shortcut} />;
      });
    },
  };

  return (
    <div className="w-full flex gap-10 justify-center flex-wrap">
      {Renderer.BrandShortcuts()}
    </div>
  );
};

export default BrandShortcutsSectionComponent;
