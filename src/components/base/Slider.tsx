import React from "react";

import styles from "./Slider.module.css";

interface Props {
  value: number;
  onChange?: (value: number) => any;
}

const noOp = () => {};

const Slider: React.SFC<Props> = ({ value, onChange = noOp }) => (
  <input
    className={styles.slider}
    type="range"
    min={0}
    max={100}
    value={value * 100}
    onChange={evt => onChange(evt.target.valueAsNumber)}
  />
);

export default Slider;
