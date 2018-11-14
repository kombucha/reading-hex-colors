import React from "react";

import { ColorModel } from "../utils/types";
import ColorChart from "./ColorChart";
import ColorCard from "./ColorCard";

interface Props {
  color: ColorModel;
}

const ColorChartWidget: React.SFC<Props> = ({ color }) => (
  <ColorCard colorModel={color}>
    <ColorChart color={color} />
  </ColorCard>
);

export default ColorChartWidget;
