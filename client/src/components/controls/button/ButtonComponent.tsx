import React, { PropsWithChildren } from "react";

type Props = {
  className?: string;
};

const ButtonComponent = (props: PropsWithChildren<Props>) => {
  return (
    <button
      className={`${
        props.className ? `${props.className} ` : ""
      }p-2 bg-rose-600 hover:bg-rose-800 active:bg-rose-50 active:text-rose-600 border border-solid border-rose-600 hover:border-rose-800 active:border-rose-600 text-rose-50 rounded-md`}
    >
      {props.children}
    </button>
  );
};

export default ButtonComponent;
