import React from "react";
import { RouteComponentProps } from "@reach/router";

import ColorInput from "../LargeInput";
import { VALID_HEX_COLOR_PATTERN, mapToHue, mapToLightness, mapToSaturation } from "../../utils";
import ColorChart from "../ColorChart";
import ColorWheel from "../ColorWheel";
import useInput from "../../hooks/useInput";

import styles from "./Learn.module.css";

type Props = RouteComponentProps;

function Learn(_props: Props) {
  const colorInput = useInput("#A2D");
  const hue = mapToHue(colorInput.value) || { name: "unknown" };
  const lightness = mapToLightness(colorInput.value);
  const saturation = mapToSaturation(colorInput.value);

  return (
    <div>
      <h1>Learn how to read hex colors</h1>

      <div className={styles.container}>
        <ColorInput className={styles.colorInput} autoFocus {...colorInput} pattern={VALID_HEX_COLOR_PATTERN} />

        <div>
          <h2>Step 1: Use the 3-digit shorthand</h2>
        </div>
        <div>
          <h2>Step 2: Build a mental chart</h2>
          <ColorChart color={colorInput.value} />
        </div>
        <div>
          <h2>Step 3: Get the hue from the shape</h2>
          <ColorWheel selectedColor={hue.name} />
        </div>
        <div>
          <h2>Step 4: Get the light from the total</h2>
          <span>Lightness: {lightness}</span>
        </div>
        <div>
          <h2>Step 5: Get the saturation from the range</h2>
          <span>Saturation: {saturation}</span>
        </div>
      </div>
    </div>
  );
}

export default Learn;
