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
import Card from "../base/Card";
import InlineColor from "../InlineColor";

type Props = RouteComponentProps;

const formatSingleDigitComponent = (component: number) => component.toString(16)[0].toUpperCase();

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
            <>
              <p>
                The goal of this exercise is to learn how to read hex color and have a good enough mental approximation.
                Hex color representation is meant to be understood by computers 🤖, but it is possible to build an
                intuition around it. The content of this page is based on the awesome talk{" "}
                <ExternalLink href="https://desandro.com">David DeSandro</ExternalLink> gave at dotCSS 2018.
              </p>
              <p>Let's start !</p>
            </>
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
                usually count in base 10 with numbers ranging from 0 to 9. Hexadecimal numbers on the other hand go like
                this : <code>0 - 1 - 2 - 3 - 4 - 5 - 6 - 7 - 8 - 9 - A - B - C - D - E - F</code>
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
                To simplify our task, let's only consider the the first number of each group. This is known as the
                shorthand notation and is a valid color representation in browsers for example. When the browser
                encounters a color in shorthand form, it will expand it by doubling each digit.
                <br />
                eg. <InlineColor color="#34d" /> will expand to <InlineColor color="#3344dd" />
              </p>
              <p>
                Of course we're losing some information by doing this. <InlineColor color="#FFF0F0" /> and{" "}
                <InlineColor color="#FFFFFF" /> are not the same colors after all. But in the general case, this is a
                good enough approximation.
              </p>
            </>
          }
          widget={<ColorShorthand color={colorInput.value} />}
        />

        <Section
          title="Step 2: Build a mental chart"
          description={
            <p>
              You know have 3 digits to play with (red: <code>{r}</code>, green: <code>{g}</code> and blue:{" "}
              <code>{b}</code>). The goal is to build a mental bar chart with 3 bars. Each bar represent a component and
              it's relative percentage. This will give you the "shape" of the color.
            </p>
          }
          widget={<ColorChart color={colorInput.value} />}
        />

        <Section
          title="Step 3: Get the hue from the shape"
          description={
            <>
              <p>
                From that shape, the goal is now to associate it with a base{" "}
                <ExternalLink href="https://en.wikipedia.org/wiki/Hue">hue</ExternalLink> or color. Represented below
                are 12 colors in a circle.
                <br />3 of them are what is called the{" "}
                <ExternalLink href="https://simple.wikipedia.org/wiki/Primary_color">primary colors</ExternalLink>. In
                our case, that is Red, Green and Blue.
                <br /> From those colors, we can get 3 other colors called the{" "}
                <ExternalLink href="https://en.wikipedia.org/wiki/Secondary_color">secondary colors</ExternalLink>.
                Secondary colors are obtained by mixing two primary colors. Yellow for example (<code>#FF0</code>) is a
                mix of red and green. Finally, we can get 6 extra colors by mixing a primary with a secondary. Those are
                called the{" "}
                <ExternalLink href="https://en.wikipedia.org/wiki/Tertiary_color">tertiary colors</ExternalLink>.
              </p>
              <p>
                Those 12 colors will give you a good base when identifying a color. The goal here is to associate the
                shape you've build previously with the closest one from the wheel below. Learning the shapes of the 12
                base colors is now easy task, but it is doable with repetition :).
              </p>
              <p>
                For the current color, the closest matching hue is <em>{hue.name}</em>.
              </p>
            </>
          }
          widget={<ColorWheel selectedColor={hue.name} />}
        />

        <Section
          title="Step 4: Get the light from the total"
          description={
            <p>
              To get the lightness of the colors, you must sum the components of the color. If it's close to 0, then
              it's a <em>dark</em> color. Close to the maximum possible value? Then it's a <em>light</em> color.
              Somewhere in the middle? Than it's <em>medium</em>.
            </p>
          }
          widget={
            <Card>
              Lightness: <em>{lightness}</em>
            </Card>
          }
        />

        <Section
          title="Step 5: Get the saturation from the range"
          description={
            <>
              <p>
                Finally to get the saturation, you have to estimate the <em>range</em> of the color. To do that, take
                the biggest value and the smallest value. For example, in the current example the biggest value is{" "}
                <em>{formatSingleDigitComponent(Math.max(r, g, b))}</em> and the smallest value is{" "}
                <em>{formatSingleDigitComponent(Math.min(r, g, b))}</em>.
              </p>
              <p>
                If that range is small, then you have a desaturated color. A special case is when all three components
                are equal or really close, then it's a grey color.
              </p>
              <p>
                If the range is large, then the color is <em>saturated</em>.
              </p>
              <p>
                Finally, if the range is somewhere in between then you're faced with a <em>washed</em> or <em>muted</em>
                color.
              </p>
            </>
          }
          widget={
            <Card>
              Saturation: <em>{saturation}</em>
            </Card>
          }
        />

        <Section
          title="Profit !"
          description={
            <>
              <p className={styles.profitText}>
                <InlineColor color={colorInput.value} /> is a{" "}
                <em>
                  {saturation} {lightness} {hue.name}
                </em>
                . 🎉🎉🎉
              </p>
              <div style={{ width: "100%", height: 0, paddingBottom: "57%", position: "relative" }}>
                <iframe
                  src="https://giphy.com/embed/Is1O1TWV0LEJi"
                  width="100%"
                  height="100%"
                  style={{ position: "absolute" }}
                  frameBorder="0"
                  className="giphy-embed"
                  allowFullScreen
                />
              </div>
            </>
          }
        />
      </div>
    </>
  );
}

export default Learn;
