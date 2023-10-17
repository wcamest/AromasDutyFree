import React, { PropsWithChildren } from "react";
import styles from "./CheckBoxComponent.module.css";

type Props = {};

const CheckBoxComponent = (props: PropsWithChildren<Props>) => {
  return (
    <label className={`${styles.form_control} flex items-center gap-2 cursor-pointer`}>
      <div className="text-rose-600"><input type="checkbox" name="checkbox" checked={true} /></div>
      {props.children}
    </label>
  );
};

export default CheckBoxComponent;
