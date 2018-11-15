import React from "react";

import Card from "./base/Card";
import Slider from "./base/Slider";
import { ColorModel } from "../utils/types";

import styles from "./LightnessWidget.module.css";
import hslToRgb from "../utils/hslToRgb";
import expandColor from "../utils/expandColor";
import analyzeColor from "../utils/analyzeColor";

interface Props {
  color: ColorModel;
  onChange: (newColor: ColorModel) => any;
}

const LightnessWidget: React.SFC<Props> = ({ color, onChange }) => {
  const [r, g, b] = color.rgb;

  const value = (r + g + b) / (3 * 0xff);

  return (
    <Card className={styles.container}>
      <span>
        Lightness: <em>{color.lightness}</em>
      </span>
      <Slider
        value={value}
        onChange={value => {
          const [h, s] = color.hsl;
          const newL = value / 100;
          const rgb = hslToRgb([h, s, newL]);
          const newHexColor = expandColor(rgb);

          // Preserve original hue & saturation !
          const newColor = analyzeColor(newHexColor);
          newColor.hsl = [h, s, newL];

          onChange(newColor);
        }}
      />
    </Card>
  );
};

export default LightnessWidget;
