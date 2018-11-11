import React from "react";

import Card from "./base/Card";
import Slider from "./Slider";
import { mapToLightness, parseHexColor } from "../utils";

import styles from "./LightnessWidget.module.css";

interface Props {
  color: string;
}

const LightnessWidget: React.SFC<Props> = ({ color }) => {
  const [r, g, b] = parseHexColor(color);
  const lightness = mapToLightness(color);

  return (
    <Card className={styles.container}>
      <span>
        Lightness: <em>{lightness}</em>
      </span>
      <Slider min={0} max={3 * 255} value={r + g + b} />
    </Card>
  );
};

export default LightnessWidget;
