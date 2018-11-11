import React from "react";

import styles from "./ColorChart.module.css";
import { parseHexColor, asPercentage } from "../utils";

interface Props {
  color: string;
  size?: number;
  showBackground?: boolean;
}

function computeInscribedSquareSize(d: number) {
  return (d ** 2 / 2) ** 0.5;
}

function ColorChart({ color, size = 100, showBackground = true }: Props) {
  const colorRgbComponents = parseHexColor(color);
  const contentSize = computeInscribedSquareSize(size);

  const wrapperStyle = { width: size, height: size, background: showBackground ? color : "none" };
  const contentStyle = { width: contentSize, height: contentSize };

  return (
    <div className={styles.wrapper} style={wrapperStyle}>
      <div className={styles.content} style={contentStyle}>
        {colorRgbComponents.map((val, idx) => (
          <div className={styles.bar} key={idx}>
            <div className={styles.value} style={{ height: asPercentage(val) }} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ColorChart;
