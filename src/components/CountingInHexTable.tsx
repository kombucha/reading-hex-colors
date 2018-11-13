import React from "react";

import styles from "./CountingInHexTable.module.css";

const sixteen = Array(16)
  .fill(undefined)
  .map((_, i) => i);

const CountingInHexTable = () => (
  <table className={styles.table}>
    <tr>
      {sixteen.map(i => (
        <td>{i}</td>
      ))}
    </tr>

    <tr>
      {sixteen.map(i => (
        <td>{i.toString(16)}</td>
      ))}
    </tr>
  </table>
);

export default CountingInHexTable;
