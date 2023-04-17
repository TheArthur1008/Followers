import React from "react";
import clsx from "clsx";

import s from "./ButtonFilter.module.scss";

export const ButtonFilter = ({
  selected = false,
  type = "button",
  children,
  ...otherProps
}) => {
  return (
    <button
      className={clsx(s.btn, {
        [s.isSelected]: selected,
      })}
      type={type}
      {...otherProps}
    >
      {children}
    </button>
  );
};
