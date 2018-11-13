import React from "react";

import { expandColor } from "../utils";
import Card from "./base/Card";

import styles from "./ColorShorthand.module.css";

interface Props {
  color: string;
}

const ColorShorthand: React.SFC<Props> = ({ color }) => {
  const expandedColor = expandColor(color).slice(1);

  return (
    <div className={styles.container}>
      <span className={styles.letter}>#</span>
      {Array.from(expandedColor).map((char, idx) => (
        <span key={idx} className={styles.letter}>
          {char}
        </span>
      ))}
    </div>
  );
};

export default ColorShorthand;
