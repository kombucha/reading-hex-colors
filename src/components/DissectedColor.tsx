import React from "react";
import { parseHexColor } from "../utils";

import styles from "./DissectedColor.module.css";
import Card from "./base/Card";

interface Props {
  color: string;
}

interface ColorComponentProps {
  value: number;
  part: "r" | "g" | "b";
}

const ColorComponent: React.SFC<ColorComponentProps> = ({ value, part }) => {
  return (
    <div className={styles.componentContainer}>
      <span className={styles.componentValue}>{value.toString(16).padStart(2, "0")}</span>
      <span className={styles.componentPart}>{part}</span>
    </div>
  );
};

const DissectedColor: React.SFC<Props> = ({ color }) => {
  const [r, g, b] = parseHexColor(color);

  return (
    <Card>
      <ul className={styles.list}>
        <li className={styles.item}>#</li>
        <li className={styles.item} style={{ color: "#f00" }}>
          <ColorComponent value={r} part={"r"} />
        </li>
        <li className={styles.item} style={{ color: "#0f0" }}>
          <ColorComponent value={g} part={"g"} />
        </li>
        <li className={styles.item} style={{ color: "#0ff" }}>
          <ColorComponent value={b} part={"b"} />
        </li>
      </ul>
    </Card>
  );
};

export default DissectedColor;
