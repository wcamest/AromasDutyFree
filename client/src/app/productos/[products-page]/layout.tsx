import React, { PropsWithChildren } from "react";

type Props = {};

const layout = (props: PropsWithChildren<Props>) => {
  return (
    <div className="w-full flex justify-center">
      <div className="w-full max-w-6xl">{props.children}</div>
    </div>
  );
};

export default layout;
