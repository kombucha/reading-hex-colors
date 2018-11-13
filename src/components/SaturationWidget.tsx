import React from "react";

import Card from "./base/Card";
import Slider from "./base/Slider";
import { ColorModel } from "../analyzeColor/types";

import styles from "./SaturationWidget.module.css";

interface Props {
  color: ColorModel;
}

const SaturationWidget: React.SFC<Props> = ({ color }) => {
  const [r, g, b] = color.rgb;

  const value = (Math.max(r, g, b) - Math.min(r, g, b)) / 0xff;

  return (
    <Card className={styles.container}>
      <span>
        Saturation: <em>{color.saturation}</em>
      </span>
      <Slider value={value} />
    </Card>
  );
};

export default SaturationWidget;
