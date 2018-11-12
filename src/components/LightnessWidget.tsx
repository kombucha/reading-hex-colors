import React from "react";

import Card from "./base/Card";
import Slider from "./base/Slider";
import { mapToLightness, parseHexColor } from "../utils";

import styles from "./LightnessWidget.module.css";

interface Props {
  color: string;
}

const LightnessWidget: React.SFC<Props> = ({ color }) => {
  const [r, g, b] = parseHexColor(color);
  const lightness = mapToLightness(color);

  const value = (r + g + b) / (3 * 0xff);

  return (
    <Card className={styles.container}>
      <span>
        Lightness: <em>{lightness}</em>
      </span>
      <Slider value={value} />
    </Card>
  );
};

export default LightnessWidget;
