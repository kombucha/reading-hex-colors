import React from "react";

import styles from "./ColorChart.module.css";
import { parseHexColor, asPercentage } from "../utils";

interface Props {
  color: string;
  size?: number;
}

function ColorChart({ color, size = 100 }: Props) {
  const colorRgbComponents = parseHexColor(color);

  return (
    <div className={styles.container} style={{ width: size, height: size }}>
      {colorRgbComponents.map((val, idx) => (
        <div className={styles.bar} key={idx}>
          <div className={styles.value} style={{ height: asPercentage(val) }} />
        </div>
      ))}
    </div>
  );
}

export default ColorChart;
