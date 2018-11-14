import React from "react";
import cn from "classnames";

import styles from "./Result.module.css";
import { ColorModel } from "../utils/types";
import ColorChart from "./ColorChart";

interface Props {
  color: ColorModel;
}

const Result: React.SFC<Props> = ({ color }) => {
  const { isLightnessRelevant, isSaturationRelevant, saturation, lightness, hue, expanded } = color;
  const shouldBeDark = color.lightness === "light";

  return (
    <div className={cn(styles.container, shouldBeDark && styles.dark)} style={{ background: expanded }}>
      <ColorChart color={color} showBackground={false} />
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
