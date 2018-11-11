import React, { useState } from "react";

import { COLOR_MAP } from "../utils";
import ColorChart from "./ColorChart";
import styles from "./ColorReference.module.css";

interface Props {
  size?: number;
}

function ColorReference({ size = 400 }: Props) {
  const [viewColorName, setViewedColorName] = useState("");

  const chartSize = size / 6;
  const r = (size - chartSize) / 2;
  const offset = r;
  const thetaOffset = -Math.PI / 2;
  const thetaSlices = (2 * Math.PI) / COLOR_MAP.length;

  const containerStyle = { width: size, height: size };

  return (
    <div className={styles.wrapper} style={containerStyle}>
      <ul className={styles.list} style={containerStyle}>
        {COLOR_MAP.map((color, idx) => {
          const theta = thetaOffset + idx * thetaSlices;
          const top = offset + r * Math.sin(theta);
          const left = offset + r * Math.cos(theta);
          const style = { top, left, width: chartSize, height: chartSize };

          const setColor = () => setViewedColorName(color.name);
          const unsetColor = () => setViewedColorName("");

          return (
            <li className={styles.item} key={color.value} style={style} onMouseOver={setColor} onMouseOut={unsetColor}>
              <ColorChart color={color.value} size={chartSize} />
            </li>
          );
        })}
      </ul>
      {viewColorName && <span className={styles.colorLabel}>{viewColorName}</span>}
    </div>
  );
}

export default ColorReference;
