import React from "react";

import Card from "./base/Card";

import styles from "./ColorShorthand.module.css";

interface Props {
  expandedColor: string;
}

const ColorShorthand: React.SFC<Props> = ({ expandedColor }) => {
  return (
    <Card className={styles.container}>
      {Array.from(expandedColor).map((char, idx) => (
        <span key={idx} className={styles.letter}>
          {char}
        </span>
      ))}
    </Card>
  );
};

export default ColorShorthand;
