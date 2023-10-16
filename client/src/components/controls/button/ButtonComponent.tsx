import React, { PropsWithChildren } from "react";

type Props = {
  className?: string;
};

const ButtonComponent = (props: PropsWithChildren<Props>) => {
  return (
    <button
      className={`${
        props.className ? `${props.className} ` : ""
      }p-2 bg-rose-600 text-rose-50 rounded-md`}
    >
      {props.children}
    </button>
  );
};

export default ButtonComponent;
