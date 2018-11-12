import React from "react";

import styles from "./Slider.module.css";

interface Props {
  min: number;
  max: number;
  value: number;
}

const Slider: React.SFC<Props> = ({ value, min, max }) => {
  const percent = (value / (max - min)) * 100;
  return (
    <div className={styles.slider}>
      <div className={styles.indicator} style={{ left: `${percent}%` }} />
    </div>
  );
};

export default Slider;
