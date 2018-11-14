import React, { useState, useRef } from "react";
import useComponentSize, { ComponentSize } from "@rehooks/component-size";
import cn from "classnames";

import ColorChart from "./ColorChart";
import analyzeColor from "../utils/analyzeColor";
import { COLOR_MAP } from "../utils/baseColors";

import styles from "./ColorWheel.module.css";

interface Props {
  minSize?: number;
  maxSize?: number;
  selectedColor?: string;
}

function ColorWheel({ minSize = 200, maxSize = 600, selectedColor = "" }: Props) {
  const [hoveredColor, setHoveredColor] = useState("");
  const ref = useRef(null);
  const { width: computedSize = minSize } = (useComponentSize as (ref: any) => ComponentSize)(ref);

  const chartSize = Math.round(computedSize / 6);
  const r = (computedSize - chartSize) / 2;
  const offset = r;
  const thetaOffset = -Math.PI / 2;
  const thetaSlices = (2 * Math.PI) / COLOR_MAP.length;

  const containerStyle = { width: computedSize, height: computedSize };
  const highlightedColor = hoveredColor || selectedColor;

  return (
    <div className={styles.wrapper} style={{ height: computedSize, maxWidth: maxSize }} ref={ref}>
      <ul className={styles.list} style={containerStyle}>
        {COLOR_MAP.map((color, idx) => {
          const theta = thetaOffset + idx * thetaSlices;
          const top = Math.round(offset + r * Math.sin(theta));
          const left = Math.round(offset + r * Math.cos(theta));
          const style = { top, left, width: chartSize, height: chartSize };
          const className = cn(styles.item, highlightedColor === color.name && styles.itemHightlighted);

          const setColor = () => setHoveredColor(color.name);
          const unsetColor = () => setHoveredColor("");

          return (
            <li className={className} key={color.value} style={style} onMouseOver={setColor} onMouseOut={unsetColor}>
              <ColorChart color={analyzeColor(color.value)} size={chartSize} theme="dark" />
            </li>
          );
        })}
      </ul>
      {highlightedColor && <span className={styles.colorLabel}>{highlightedColor}</span>}
    </div>
  );
}

export default ColorWheel;
