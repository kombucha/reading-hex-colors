import React from "react";
import { RouteComponentProps } from "@reach/router";

import { VALID_HEX_COLOR_PATTERN, mapToHue, mapToLightness, mapToSaturation, parseHexColor } from "../../utils";
import useInput from "../../hooks/useInput";
import ColorChart from "../ColorChart";
import LargeInput from "../base/LargeInput";
import ColorShorthand from "../ColorShorthand";
import ColorWheel from "../ColorWheel";
import DissectedColor from "../DissectedColor";
import ExternalLink from "../base/ExternalLink";
import Section from "../Section";

import styles from "./Learn.module.css";

type Props = RouteComponentProps;

function Learn(_props: Props) {
  const colorInput = useInput("#AA22DD");
  const [r, g, b] = parseHexColor(colorInput.value);
  const hue = mapToHue(colorInput.value) || { name: "unknown" };
  const lightness = mapToLightness(colorInput.value);
  const saturation = mapToSaturation(colorInput.value);

  return (
    <>
      <div className={styles.container}>
        <Section
          title="Goal"
          description={
            <p>
              The goal of this exercise is to learn how to read hex color and have a good enough approximation mental
              representation. Hex color representation is meant to be understood by computers, but it is possible to
              build an intuition around it. The content of this page is based on the awesome talk{" "}
              <ExternalLink href="https://desandro.com">David DeSandro</ExternalLink> gave at dotCSS 2018.
              <br />
              <br />
              Let's start !
            </p>
          }
        />

        <div className={styles.inputContainer}>
          <LargeInput {...colorInput} autoFocus pattern={VALID_HEX_COLOR_PATTERN} />
        </div>

        <Section
          title="Anatomy of an hex color"
          description={
            <>
              <p>
                An hex color string is the concatenation of 3 numbers represented in{" "}
                <ExternalLink href="https://en.wikipedia.org/wiki/Hexadecimal">hexadecimal</ExternalLink> or base 16. We
                usually count in base 10 with numbers ranging from 0 to 9 before incrementing. Hexadecimal numbers on
                the other hand go like this : <code>0 - 1 - 2 - 3 - 4 - 5 - 6 - 7 - 8 - 9 - A - B - C - D - E - F</code>
                .
                <br />
              </p>
              <p>
                Each number represents one component in the color, respectively Red Green and Blue. This number goes
                from 0 (<code>0x00</code>) to 255 (<code>0xFF</code>)
              </p>
            </>
          }
          widget={<DissectedColor color={colorInput.value} />}
        />

        <Section
          title="Step 1: Use the 3-digit shorthand"
          description={
            <>
              <p>
                To simplify or task, let's only consider the the first number of each group. This is known as the
                shorthand notation and is a valid color representation in browsers for example. When the browser
                encounter a color in shorthand form, it will expand it by doubling each digit.
                <br />
                eg. <code>#34d</code> will expand to <code>#3344dd</code>
              </p>
              <p>
                Of course we're losing some information by doing this. <code>#F8F0F0</code> and <code>#FFFFFF</code> are
                not the same colors after all. But in the general case, this is a good enough approximation.
              </p>
            </>
          }
          widget={<ColorShorthand color={colorInput.value} />}
        />

        <Section
          title="Step 2: Build a mental chart"
          description={
            <p>
              You know have 3 digits to play with (red: {r}, green: {g} and blue: {b}). The goal is to build a mental
              bar chart with 3 bars. Each bar represent a component and it's relative percentage. This will give you the
              "shape" of the color.
            </p>
          }
          widget={<ColorChart color={colorInput.value} />}
        />

        <Section
          title="Step 3: Get the hue from the shape"
          description={
            <>
              <p>
                From that shape, the goal is now to associate it with a base hue or color. Represented below are 12
                colors. 3 of them are what is called the{" "}
                <ExternalLink href="https://simple.wikipedia.org/wiki/Primary_color">primary colors</ExternalLink>. In
                our case, that is Red, Green and Blue. From those colors, we can get 3 other colors called{" "}
                <ExternalLink href="https://en.wikipedia.org/wiki/Secondary_color">secondary colors</ExternalLink>.
                Secondary colors are obtained by mixing two primary colors. Yellow for example (<code>#FF0</code>) is a
                mix of red and green. Finally, we can get 6 extra colors by mixing a primary with a secondary. Those are
                called <ExternalLink href="https://en.wikipedia.org/wiki/Tertiary_color">tertiary colors</ExternalLink>.
              </p>
              <p>
                Those 12 colors will give you a good base when identifying a color. The goal here is to associate the
                shape you've build previously with the closest one from the wheel below. Learning the shapes of the 12
                base colors is now easy task, but it is doable with repetition :).
              </p>
              <p>
                For the current color, the closest matching hue is <b>{hue.name}</b>.
              </p>
            </>
          }
          widget={<ColorWheel selectedColor={hue.name} />}
        />

        <Section
          title="Step 4: Get the light from the total"
          description={"todo"}
          widget={<span>Lightness: {lightness}</span>}
        />

        <Section
          title="Step 5: Get the saturation from the range"
          description={"todo"}
          widget={<span>Saturation: {saturation}</span>}
        />
      </div>
    </>
  );
}

export default Learn;
