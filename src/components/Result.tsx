import React from "react";

import InlineColor from "./InlineColor";
import { parseHexColor, mapToHue, mapToLightness, mapToSaturation, shorthandColor } from "../utils";

import styles from "./Result.module.css";

interface Props {
  color: string;
}

const Result: React.SFC<Props> = ({ color }) => {
  const shorthandValue = shorthandColor(color);

  const [r, g, b] = parseHexColor(shorthandValue);
  const hue = mapToHue(shorthandValue);
  const lightness = mapToLightness(shorthandValue);
  const saturation = mapToSaturation(shorthandValue);

  const doesSaturationMatter = r !== g || g !== b;
  const doesLightnessMatter = hue.name !== "white" && hue.name !== "black";

  return (
    <div className={styles.container} style={{ background: color }}>
      <p>
        <InlineColor color={color} /> {doesSaturationMatter || doesLightnessMatter ? "is a " : "is "}
        <em>
          {doesSaturationMatter && saturation} {doesLightnessMatter && lightness} {hue.name}
        </em>
      </p>
    </div>
  );
};

export default Result;
