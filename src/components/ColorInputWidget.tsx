import React, { useRef } from "react";
import { createPortal } from "react-dom";
import cn from "classnames";

import styles from "./ColorInputWidget.module.css";
import { VALID_HEX_COLOR_PATTERN } from "../utils/validateColor";
import useVisibility from "./base/useVisibility";
import { ColorModel } from "../utils/types";
import analyzeColor from "../utils/analyzeColor";
import ColorChart from "./ColorChart";
import Card from "./base/Card";

interface Props {
  color: ColorModel;
  onChange: (color: ColorModel) => any;
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

const ColorInputWidget: React.SFC<Props> = ({ color, onChange }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useVisibility(ref);
  const backgroundStyle = { background: color.expanded };

  const inputProps = {
    value: color.originalInput,
    onChange: (evt: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = evt.target.value;
      if (!newValue || newValue.match(/^#?[a-f0-9]{0,6}$/i)) {
        onChange(analyzeColor(newValue));
      }
    }
  };

  return (
    <>
      <Card ref={ref} className={styles.container} style={backgroundStyle}>
        <ColorInput {...inputProps} autoFocus />
        <ColorChart color={color} showBackground={false} />
      </Card>
      {!isVisible &&
        createPortal(
          <div className={styles.stickiedContainer} style={backgroundStyle}>
            <ColorInput {...inputProps} />
            <ColorChart color={color} showBackground={false} size={58} />
          </div>,
          document.body
        )}
    </>
  );
};

export default ColorInputWidget;
