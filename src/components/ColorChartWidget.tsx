import React from "react";

import { ColorModel } from "../utils/types";
import ColorChart from "./ColorChart";
import ColorCard from "./ColorCard";

import styles from "./ColorChartWidget.module.css";

interface Props {
  color: ColorModel;
}

const ColorChartWidget: React.SFC<Props> = ({ color }) => (
  <ColorCard className={styles.container} colorModel={color}>
    <ColorChart color={color} />
  </ColorCard>
);

export default ColorChartWidget;
