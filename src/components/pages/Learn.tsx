import React from "react";
import { RouteComponentProps } from "@reach/router";

import { VALID_HEX_COLOR_PATTERN, mapToHue, mapToLightness, mapToSaturation } from "../../utils";
import useInput from "../../hooks/useInput";
import ColorChart from "../ColorChart";
import ColorInput from "../LargeInput";
import ColorWheel from "../ColorWheel";
import DissectedColor from "../DissectedColor";
import ExternalLink from "../ExternalLink";

import styles from "./Learn.module.css";

type Props = RouteComponentProps;

function Learn(_props: Props) {
  const colorInput = useInput("#AA22DD");
  const hue = mapToHue(colorInput.value) || { name: "unknown" };
  const lightness = mapToLightness(colorInput.value);
  const saturation = mapToSaturation(colorInput.value);

  return (
    <>
      <div className={styles.container}>
        <ColorInput className={styles.colorInput} autoFocus {...colorInput} pattern={VALID_HEX_COLOR_PATTERN} />

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Anatomy of an hex color</h2>
          <p>
            An hex color string is the concatenation of 3 numbers represented in{" "}
            <ExternalLink href="https://en.wikipedia.org/wiki/Hexadecimal">hexadecimal</ExternalLink> or base 16. We
            usually count in base 10 with numbers ranging from 0 to 9 before incrementing. Hexadecimal numbers on the
            other hand go like this : <code>0 - 1 - 2 - 3 - 4 - 5 - 6 - 7 - 8 - 9 - A - B - C - D - E - F</code>.
            <br />
          </p>
          <p>Each number represents one component in the color, respectively Red Green and Blue.</p>

          <div className={styles.sectionWidget}>
            <DissectedColor color={colorInput.value} />
          </div>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Step 1: Use the 3-digit shorthand</h2>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Step 2: Build a mental chart</h2>
          <div className={styles.sectionWidget}>
            <ColorChart color={colorInput.value} />
          </div>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Step 3: Get the hue from the shape</h2>
          <div className={styles.sectionWidget}>
            <ColorWheel selectedColor={hue.name} />
          </div>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Step 4: Get the light from the total</h2>
          <div className={styles.sectionWidget}>
            <span>Lightness: {lightness}</span>
          </div>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Step 5: Get the saturation from the range</h2>
          <div className={styles.sectionWidget}>
            <span>Saturation: {saturation}</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Learn;
