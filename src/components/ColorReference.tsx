import React from "react";

import { COLOR_MAP } from "../utils";
import ColorChart from "./ColorChart";
import styles from "./ColorReference.module.css";

interface Props {
  size?: number;
}

function ColorReference({ size = 500 }: Props) {
  const chartSize = size / 6;
  const r = (size - chartSize) / 2;
  const offset = r;
  const thetaOffset = -Math.PI / 2;
  const thetaSlices = (2 * Math.PI) / COLOR_MAP.length;

  return (
    <ul className={styles.list} style={{ width: size, height: size }}>
      {COLOR_MAP.map((c, idx) => {
        const theta = thetaOffset + idx * thetaSlices;
        const top = offset + r * Math.sin(theta);
        const left = offset + r * Math.cos(theta);
        const style = { top, left };

        return (
          <li className={styles.item} key={c.value} style={style}>
            <ColorChart color={c.value} size={chartSize} />
          </li>
        );
      })}
    </ul>
  );
}

export default ColorReference;
