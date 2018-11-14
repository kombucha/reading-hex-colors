import React from "react";

import { ColorModel } from "../utils/types";
import Card from "./base/Card";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  colorModel: ColorModel;
}

const ColorCard = React.forwardRef<HTMLDivElement, Props>(({ colorModel, ...otherProps }, ref) => (
  <Card ref={ref} style={{ background: colorModel.expanded }} {...otherProps} />
));

export default ColorCard;
