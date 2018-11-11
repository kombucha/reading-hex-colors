import React from "react";

import useInput from "../hooks/useInput";
import { mapToHue, mapToLightness, mapToSaturation, VALID_HEX_COLOR_PATTERN } from "../utils";
import ColorChart from "./ColorChart";
import ColorInput from "./LargeInput";
import ColorReference from "./ColorReference";

import styles from "./App.module.css";

function App() {
  const colorInput = useInput("#A2D");
  const hue = (mapToHue(colorInput.value) || { name: "unknown" }).name;
  const lightness = mapToLightness(colorInput.value);
  const saturation = mapToSaturation(colorInput.value);

  return (
    <div className={styles.container}>
      <ColorInput className={styles.colorInput} autoFocus {...colorInput} pattern={VALID_HEX_COLOR_PATTERN} />

      <ColorChart color={colorInput.value} />

      <span>Hue: {hue}</span>
      <span>Saturation: {saturation}</span>
      <span>Lightness: {lightness}</span>
      <hr />

      <ColorReference />
    </div>
  );
}

export default App;
