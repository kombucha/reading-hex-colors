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

const DissectedColor: React.SFC<Props> = ({ color }) => {
  const [r, g, b] = parseHexColor(color);

  return (
    <ul className={styles.list}>
      <li className={styles.itemRed}>{r.toString().padStart(2, "0")}</li>
      <li className={styles.itemGreen}>{g.toString().padStart(2, "0")}</li>
      <li className={styles.itemBlue}>{b.toString().padStart(2, "0")}</li>
    </ul>
  );
};

export default DissectedColor;
