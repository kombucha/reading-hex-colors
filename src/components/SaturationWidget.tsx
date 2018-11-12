import React from "react";

import Card from "./base/Card";
import Slider from "./base/Slider";
import { parseHexColor, mapToSaturation } from "../utils";

import styles from "./SaturationWidget.module.css";

interface Props {
  color: string;
}

const SaturationWidget: React.SFC<Props> = ({ color }) => {
  const [r, g, b] = parseHexColor(color);
  const saturation = mapToSaturation(color);

  return (
    <Card className={styles.container}>
      <span>
        Saturation: <em>{saturation}</em>
      </span>
      <Slider min={0} max={255} value={Math.max(r, g, b) - Math.min(r, g, b)} />
    </Card>
  );
};

export default SaturationWidget;
