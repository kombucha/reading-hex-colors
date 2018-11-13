import React from "react";
import cn from "classnames";

import styles from "./ColorFullText.module.css";
import { COLOR_MAP } from "../utils/baseColors";

interface Props {
  className?: string;
  children: string;
}

function getColor(id: number) {
  return COLOR_MAP[id % COLOR_MAP.length].value;
}

function ColorFullText({ className, children }: Props) {
  return (
    <span className={cn(styles.text, className)}>
      <span className={styles.textShadow}>{children}</span>
      {Array.from(children).map((char, idx) => (
        <span key={idx} className={styles.char} style={{ color: getColor(idx) }}>
          {char}
        </span>
      ))}
    </span>
  );
}

export default ColorFullText;
