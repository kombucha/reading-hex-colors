import React from "react";
import cn from "classnames";

import styles from "./LargeInput.module.css";

type Props = React.InputHTMLAttributes<HTMLInputElement>;

function ColorInput({ className, ...rest }: Props) {
  return <input className={cn(styles.input, className)} {...rest} />;
}

export default ColorInput;
