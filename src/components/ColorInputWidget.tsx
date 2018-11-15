import React from "react";
import cn from "classnames";

import styles from "./ColorInputWidget.module.css";
import { VALID_HEX_COLOR_PATTERN } from "../utils/validateColor";
import { ColorModel } from "../utils/types";
import analyzeColor from "../utils/analyzeColor";
import ColorChart from "./ColorChart";
import ColorCard from "./ColorCard";

interface Props {
  color: ColorModel;
  onChange: (color: ColorModel) => any;
  hover?: boolean;
}

const ColorInput: React.SFC<React.InputHTMLAttributes<HTMLInputElement>> = ({ className, ...otherProps }) => (
  <input
    className={cn(styles.colorInput, className)}
    {...otherProps}
    type="text"
    pattern={VALID_HEX_COLOR_PATTERN}
    placeholder="#000000"
    minLength={4}
    maxLength={7}
  />
);

const ColorInputWidget = React.forwardRef<HTMLDivElement, Props>(({ color, onChange, hover }, ref) => {
  const shouldBeDark = color.lightness === "light";

  const containerClass = cn(styles.container, hover && styles.hover);
  const chartSize = hover ? 58 : undefined;
  const inputProps = {
    className: cn({ [styles.colorInputDark]: shouldBeDark }),
    value: color.originalInput,
    onChange: (evt: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = evt.target.value;
      if (!newValue || newValue.match(/^#?[a-f0-9]{0,6}$/i)) {
        onChange(analyzeColor(newValue));
      }
    }
  };

  return (
    <ColorCard ref={ref} className={containerClass} colorModel={color}>
      <ColorInput {...inputProps} autoFocus />
      <ColorChart color={color} showBackground={false} size={chartSize} />
    </ColorCard>
  );
});

export default ColorInputWidget;
