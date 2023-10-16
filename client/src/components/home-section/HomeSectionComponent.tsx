import React, { PropsWithChildren } from "react";

type Props = {
  title: string;
};

const HomeSectionComponent = (props: PropsWithChildren<Props>) => {
  const { title, children } = props;

  return (
    <div className="w-full flex flex-col gap-3">
      <h1 className="text-2xl font-semibold text-rose-700 text-center">{title}</h1>
      <div>{children}</div>
    </div>
  );
};

export default HomeSectionComponent;
