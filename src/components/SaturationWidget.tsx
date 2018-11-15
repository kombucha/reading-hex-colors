import React from "react";

import Card from "./base/Card";
import Slider from "./base/Slider";
import { ColorModel } from "../utils/types";

import styles from "./SaturationWidget.module.css";
import hslToRgb from "../utils/hslToRgb";
import expandColor from "../utils/expandColor";
import analyzeColor from "../utils/analyzeColor";
import rgbToHsl from "../utils/rgbToHsl";

interface Props {
  color: ColorModel;
  onChange: (newColor: ColorModel) => any;
}

const SaturationWidget: React.SFC<Props> = ({ color, onChange }) => {
  const [r, g, b] = color.rgb;

  const value = (Math.max(r, g, b) - Math.min(r, g, b)) / 0xff;

  return (
    <Card className={styles.container}>
      <span>
        Saturation: <em>{color.saturation}</em>
      </span>
      <Slider
        value={value}
        onChange={value => {
          const [h, _, l] = color.hsl;
          const newS = value / 100;
          const rgb = hslToRgb([h, newS, l]);
          const newHexColor = expandColor(rgb);

          // Preserve original hue & lightness !
          const newColor = analyzeColor(newHexColor);
          newColor.hsl = [h, newS, l];

          onChange(newColor);
        }}
      />
    </Card>
  );
};

export default SaturationWidget;
