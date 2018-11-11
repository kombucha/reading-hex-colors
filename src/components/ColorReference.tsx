import React from "react";

import { COLOR_MAP } from "../utils";
import ColorChart from "./ColorChart";
import styles from "./ColorReference.module.css";

function ColorReference() {
  return (
    <ul className={styles.list}>
      {COLOR_MAP.map(c => (
        <li className={styles.item} key={c.value}>
          <div className={styles.itemName}>
            {c.name} ({c.value})
          </div>
          <ColorChart color={c.value} />
        </li>
      ))}
    </ul>
  );
}

export default ColorReference;
