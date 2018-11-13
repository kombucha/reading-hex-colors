import React, { useMemo } from "react";

import { ColorModel } from "../utils/types";

import styles from "./ColorChart.module.css";

interface Props {
  color: ColorModel;
  size?: number;
  showBackground?: boolean;
}

function computeInscribedSquareSize(d: number) {
  return Math.floor((d ** 2 / 2) ** 0.5);
}

function asPercentage(component: number) {
  return `${Math.round((component / 0xff) * 100)}%`;
}

function ColorChart({ color, size = 100, showBackground = true }: Props) {
  const contentSize = useMemo(() => computeInscribedSquareSize(size), [size]);

  const wrapperStyle = { width: size, height: size, background: showBackground ? color.expanded : "none" };
  const contentStyle = { width: contentSize, height: contentSize };

  return (
    <div className={styles.wrapper} style={wrapperStyle}>
      <div className={styles.content} style={contentStyle}>
        {color.rgb.map((val, idx) => (
          <div className={styles.bar} key={idx}>
            <div className={styles.value} style={{ height: asPercentage(val) }} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ColorChart;
