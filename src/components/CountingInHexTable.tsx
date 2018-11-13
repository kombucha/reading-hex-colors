import React from "react";

import styles from "./CountingInHexTable.module.css";

const sixteen = Array(16)
  .fill(undefined)
  .map((_, i) => i);

const CountingInHexTable = () => (
  <table className={styles.table}>
    <tbody>
      <tr>
        {sixteen.map(i => (
          <td key={i}>{i}</td>
        ))}
      </tr>

      <tr>
        {sixteen.map(i => (
          <td key={i}>{i.toString(16)}</td>
        ))}
      </tr>
    </tbody>
  </table>
);

export default CountingInHexTable;
