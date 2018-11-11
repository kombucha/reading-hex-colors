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
    <Card>
      <span className={styles.container}>
        <span className={styles.letter}>#</span>
        {Array.from(expandedColor).map((char, idx) => (
          <span key={idx} className={styles.letter}>
            {char}
          </span>
        ))}
      </span>
    </Card>
  );
};

export default ColorShorthand;
