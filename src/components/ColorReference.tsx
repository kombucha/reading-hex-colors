import React from "react";

import { COLOR_MAP } from "../utils";
import ColorChart from "./ColorChart";
import styles from "./ColorReference.module.css";

function ColorReference() {
  return (
    <ul className={styles.list}>
      {COLOR_MAP.map(color => (
        <li className={styles.item} key={color.value} style={{ background: color.value }}>
          <div className={styles.itemDescription}>
            {color.name}
            <br />({color.value})
          </div>
          <ColorChart color={color.value} />
        </li>
      ))}
    </ul>
  );
}

export default ColorReference;
