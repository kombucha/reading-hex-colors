import React from "react";

import useInput from "../hooks/useInput";
import { mapToHue, mapToLightness, mapToSaturation } from "../utils";
import ColorSquare from "./ColorSquare";
import ColorChart from "./ColorChart";
import ColorReference from "./ColorReference";
import styles from "./App.module.css";

function App() {
  const colorInput = useInput("#A2D");
  const hue = (mapToHue(colorInput.value) || { name: "unknown" }).name;
  const lightness = mapToLightness(colorInput.value);
  const saturation = mapToSaturation(colorInput.value);

  return (
    <div className={styles.container}>
      <label>
        Color:
        <input {...colorInput} />
      </label>

      <ColorSquare color={colorInput.value} />
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
