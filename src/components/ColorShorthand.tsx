import React from "react";

import styles from "./ColorShorthand.module.css";

interface Props {
  expandedColor: string;
}

const ColorShorthand: React.SFC<Props> = ({ expandedColor }) => {
  return (
    <div className={styles.container}>
      {Array.from(expandedColor).map((char, idx) => (
        <span key={idx} className={styles.letter}>
          {char}
        </span>
      ))}
    </div>
  );
};

export default ColorShorthand;
