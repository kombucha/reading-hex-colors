import React, { useMemo } from "react";
import cn from "classnames";

import { ColorModel } from "../utils/types";

import styles from "./ColorChart.module.css";

interface Props {
  color: ColorModel;
  size?: number;
  showBackground?: boolean;
  theme?: "dark" | "light";
}

function computeInscribedSquareSize(d: number) {
  return Math.floor((d ** 2 / 2) ** 0.5);
}

function asPercentage(component: number) {
  return `${Math.round((component / 0xff) * 100)}%`;
}

function ColorChart({ color, size = 96, showBackground = true, theme }: Props) {
  const contentSize = useMemo(() => (showBackground ? computeInscribedSquareSize(size) : size), [size, showBackground]);

  const wrapperStyle = { width: size, height: size, background: showBackground ? color.expanded : "none" };
  const contentStyle = { width: contentSize, height: contentSize };
  const barStyle = { width: contentSize / 6 };

  const shouldBeDark = !theme ? color.lightness === "light" : theme === "dark";

  return (
    <div className={cn(styles.wrapper, shouldBeDark && styles.dark)} style={wrapperStyle}>
      <div className={styles.content} style={contentStyle}>
        {color.rgb.map((val, idx) => (
          <div className={styles.bar} key={idx} style={barStyle}>
            <div className={styles.value} style={{ height: asPercentage(val) }} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ColorChart;
