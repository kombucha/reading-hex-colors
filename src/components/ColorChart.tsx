import React from "react";

import { parseHexColor, asPercentage } from "../utils";

interface Props {
  color: string;
}

function ColorChart({ color }: Props) {
  const colorRgbComponents = parseHexColor(color);

  return (
    <div className="ColorChart">
      {colorRgbComponents.map((val, idx) => (
        <div className="ColorChart_bar" key={idx}>
          <div className="ColorChart_value" style={{ height: asPercentage(val) }} />
        </div>
      ))}
    </div>
  );
}

export default ColorChart;
