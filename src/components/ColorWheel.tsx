import React, { useState } from "react";
import cn from "classnames";

import { COLOR_MAP } from "../utils";
import ColorChart from "./ColorChart";
import styles from "./ColorWheel.module.css";

interface Props {
  size?: number;
  selectedColor?: string;
}

function ColorWheel({ size = 400, selectedColor = "" }: Props) {
  const [hoveredColor, setHoveredColor] = useState("");

  const chartSize = Math.round(size / 6);
  const r = (size - chartSize) / 2;
  const offset = r;
  const thetaOffset = -Math.PI / 2;
  const thetaSlices = (2 * Math.PI) / COLOR_MAP.length;

  const containerStyle = { width: size, height: size };
  const highlightedColor = hoveredColor || selectedColor;

  return (
    <div className={styles.wrapper} style={containerStyle}>
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
              <ColorChart color={color.value} size={chartSize} />
            </li>
          );
        })}
      </ul>
      {highlightedColor && <span className={styles.colorLabel}>{highlightedColor}</span>}
    </div>
  );
}

export default ColorWheel;
