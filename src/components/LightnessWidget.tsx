import React from "react";

import Card from "./base/Card";
import Slider from "./base/Slider";
import { ColorModel } from "../analyzeColor/types";

import styles from "./LightnessWidget.module.css";

interface Props {
  color: ColorModel;
}

const LightnessWidget: React.SFC<Props> = ({ color }) => {
  const [r, g, b] = color.rgb;

  const value = (r + g + b) / (3 * 0xff);

  return (
    <Card className={styles.container}>
      <span>
        Lightness: <em>{color.lightness}</em>
      </span>
      <Slider value={value} />
    </Card>
  );
};

export default LightnessWidget;
