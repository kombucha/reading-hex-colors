import React, { useState, useCallback } from "react";
import ReactDOM from "react-dom";

import {
  parseHexColor,
  asPercentage,
  mapToHue,
  mapToLightness,
  mapToSaturation,
  COLOR_MAP
} from "./utils";
import "./styles.css";

function ColorSquare({ color, size = 64 }) {
  return <div style={{ background: color, width: size, height: size }} />;
}

function ColorChart({ color }) {
  const colorRgbComponents = parseHexColor(color);

  return (
    <div className="ColorChart">
      {colorRgbComponents.map((val, idx) => (
        <div className="ColorChart_bar" key={idx}>
          <div
            className="ColorChart_value"
            style={{ height: asPercentage(val) }}
          />
        </div>
      ))}
    </div>
  );
}

function Reference() {
  return (
    <ul className="Reference">
      {COLOR_MAP.map(c => (
        <li className="Reference_item">
          <div className="Reference_description">
            <span>
              {c.name} ({c.value}) &nbsp;
            </span>
            <ColorSquare color={c.value} size={18} />
          </div>
          <ColorChart color={c.value} />
        </li>
      ))}
    </ul>
  );
}

function App() {
  const colorInput = useInput("#A2D");
  const hue = (mapToHue(colorInput.value) || { name: "unknown" }).name;
  const lightness = mapToLightness(colorInput.value);
  const saturation = mapToSaturation(colorInput.value);

  return (
    <div className="App">
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

      <Reference />
    </div>
  );
}

function useInput(initialValue) {
  const [value, setValue] = useState(initialValue);
  const onChange = useCallback(evt => setValue(evt.target.value));

  return { onChange, value };
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
