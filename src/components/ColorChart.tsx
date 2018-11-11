import React, { useMemo } from "react";

import styles from "./ColorChart.module.css";
import { parseHexColor, asPercentage } from "../utils";

interface Props {
  color: string;
  size?: number;
  showBackground?: boolean;
}

function computeInscribedSquareSize(d: number) {
  return Math.floor((d ** 2 / 2) ** 0.5);
}

function ColorChart({ color, size = 100, showBackground = true }: Props) {
  const colorRgbComponents = useMemo(() => parseHexColor(color), [color]);
  const contentSize = useMemo(() => computeInscribedSquareSize(size), [size]);

  return (
    <div className={styles.container}>
      {colorRgbComponents.map((val, idx) => (
        <div className={styles.bar} key={idx}>
          <div className={styles.value} style={{ height: asPercentage(val) }} />
        </div>
      ))}
    </div>
  );
}

export default ColorChart;
