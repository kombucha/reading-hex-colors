import React from "react";

import styles from "./InlineColor.module.css";

interface Props {
  color: string;
}

const InlineColor: React.SFC<Props> = ({ color }) => (
  <span className={styles.container}>
    {color}&nbsp;
    <span className={styles.color} style={{ background: color }} />
    &nbsp;
  </span>
);

export default InlineColor;
