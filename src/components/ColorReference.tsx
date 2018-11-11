import React from "react";

import { COLOR_MAP } from "../utils";
import ColorSquare from "./ColorSquare";
import ColorChart from "./ColorChart";
import styles from "./ColorReference.module.css";

function ColorReference() {
  return (
    <ul className={styles.list}>
      {COLOR_MAP.map(c => (
        <li className={styles.item} key={c.value}>
          <div className={styles.itemDescription}>
            <span>
              {c.name} ({c.value}) &nbsp;
            </span>
            <ColorSquare color={c.value} size={18} />
          </div>
          <ColorChart color={c.value} />
        </li>
      ))}
    </ul>
  );
}

export default ColorReference;
