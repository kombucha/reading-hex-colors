import React from "react";

import styles from "./Result.module.css";
import { ColorModel } from "../utils/types";
import ColorChart from "./ColorChart";

interface Props {
  color: ColorModel;
}

const Result: React.SFC<Props> = ({ color }) => {
  const { isLightnessRelevant, isSaturationRelevant, saturation, lightness, hue, expanded } = color;

  return (
    <div className={styles.container} style={{ background: expanded }}>
      <ColorChart color={color} />
      <p>
        {expanded} {isSaturationRelevant || isLightnessRelevant ? "is a " : "is "}
        <em>
          {isSaturationRelevant && saturation} {isLightnessRelevant && lightness} {hue}
        </em>
      </p>
    </div>
  );
};

export default Result;
