import React, { useState } from "react";
import { parseHexColor } from "../utils";

import styles from "./DissectedColor.module.css";

interface Props {
  color: string;
}

const formatter = (n: number, base: number) => n.toString(base).padStart(2, "0");

const DissectedColor: React.SFC<Props> = ({ color }) => {
  const [base, setBase] = useState(10);
  const [r, g, b] = parseHexColor(color);

  const handleClick = () => setBase(base === 10 ? 16 : 10);

  return (
    <ul className={styles.list} onClick={handleClick}>
      <li className={styles.itemRed}>{formatter(r, base)}</li>
      <li className={styles.itemGreen}>{formatter(g, base)}</li>
      <li className={styles.itemBlue}>{formatter(b, base)}</li>
    </ul>
  );
};

export default DissectedColor;
