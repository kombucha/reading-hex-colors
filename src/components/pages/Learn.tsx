import React, { useState } from "react";
import { RouteComponentProps } from "@reach/router";

import analyzeColor from "../../utils/analyzeColor";
import ColorShorthand from "../ColorShorthand";
import ColorWheel from "../ColorWheel";
import DissectedColor from "../DissectedColor";
import ExternalLink from "../base/ExternalLink";
import Section from "../Section";

import styles from "./Learn.module.css";
import InlineColor from "../InlineColor";
import LightnessWidget from "../LightnessWidget";
import SaturationWidget from "../SaturationWidget";
import CountingInHexTable from "../CountingInHexTable";
import Result from "../Result";
import Profit from "../Profit";
import ColorInputWidget from "../ColorInputWidget";
import ColorChartWidget from "../ColorChartWidget";

type Props = RouteComponentProps;

const formatSingleDigitComponent = (component: number) => component.toString(16)[0].toUpperCase();

function Learn(_props: Props) {
  const [colorModel, setColorModel] = useState(analyzeColor("#AA22DD"));
  const [r, g, b] = colorModel.rgb;

  return (
    <>
      <div className={styles.sections}>
        <Section title="Goal">
          <p>
            The goal of this exercise is to learn how to read hex colors and get a good enough mental approximation. Hex
            colors are meant to be understood by computers 🤖, but it is possible to build an intuition around it. The
            content of this page is based on the awesome talk{" "}
            <ExternalLink href="https://desandro.com">David DeSandro</ExternalLink> gave at{" "}
            <ExternalLink href="https://www.dotcss.io/">dotCSS 2018</ExternalLink>.
          </p>
          <p>Let's start! Pick a color or keep the default one.</p>

          <ColorInputWidget color={colorModel} onChange={setColorModel} />
        </Section>

        <Section title="Anatomy of a hex color">
          <p>
            A hex color string is the concatenation of 3 numbers represented in{" "}
            <ExternalLink href="https://en.wikipedia.org/wiki/Hexadecimal">hexadecimal</ExternalLink> or base 16.
            <br />
            Here's how you count in base 16:
          </p>
          <CountingInHexTable />
          <br />
          <p>
            Each number represents one component in the color, respectively Red Green and Blue. This number goes from 0
            (<code>0x00</code>) to 255 (<code>0xFF</code>)
          </p>
          <DissectedColor color={colorModel} />
        </Section>

        <Section step={1} title="Use the 3-digit shorthand">
          <p>
            To simplify our task, let's only consider the the first number of each group. This is known as the shorthand
            notation and is a valid color representation in browsers for example. When the browser encounters a color in
            shorthand form, it will expand it by doubling each digit.
          </p>
          <p>
            For example, <InlineColor color="#34d" /> will expand to <InlineColor color="#3344dd" />
          </p>
          <p>
            Of course we're losing some information by doing this. <InlineColor color="#FFF0F0" /> and{" "}
            <InlineColor color="#FFFFFF" /> are not the same colors after all. But generally, this is a good enough
            approximation.
          </p>
          <ColorShorthand expandedColor={colorModel.expanded} />
        </Section>

        <Section step={2} title="Build a mental chart">
          <p>
            You now have 3 digits to play with (red: <code>{r}</code>, green: <code>{g}</code> and blue:{" "}
            <code>{b}</code>). The goal is to build a mental bar chart with 3 bars. Each bar represents a component and
            its relative percentage. This will give you the "shape" of the color.
          </p>
          <ColorChartWidget color={colorModel} />
        </Section>

        <Section step={3} title="Get the hue from the shape">
          <p>
            From that shape, the goal is now to associate it with a base{" "}
            <ExternalLink href="https://en.wikipedia.org/wiki/Hue">hue</ExternalLink> or color. Represented below are 12
            colors in a circle.
            <br />3 of them are what we call the{" "}
            <ExternalLink href="https://simple.wikipedia.org/wiki/Primary_color">primary colors</ExternalLink>. In our
            case, that is Red, Green and Blue.
            <br /> From those colors, we can get 3 other colors called the{" "}
            <ExternalLink href="https://en.wikipedia.org/wiki/Secondary_color">secondary colors</ExternalLink>.
            Secondary colors are obtained by mixing two primary colors. Yellow for example (
            <InlineColor color="#FF0" />) is a mix of red and green. Finally, we can get 6 extra colors by mixing a
            primary with a secondary. Those are called the{" "}
            <ExternalLink href="https://en.wikipedia.org/wiki/Tertiary_color">tertiary colors</ExternalLink>.
          </p>
          <p>
            Those 12 colors will give you a good base when identifying a color. The goal here is to associate the shape
            you built previously with the closest one from the wheel below. Learning the shapes of the 12 base colors is
            no easy task, but it is possible with practice 😊.
          </p>
          <p>
            For the current color, the closest matching hue is <em>{colorModel.hue}</em>.
          </p>
          <ColorWheel selectedColor={colorModel.hue} maxSize={600} />
        </Section>

        <Section step={4} title="Get the lightness from the total" dim={!colorModel.isLightnessRelevant}>
          <p>
            To get the lightness of the colors, you must sum the components of the color. If it's close to 0, then it's
            a <em>dark</em> color. Close to the maximum possible value? Then it's a <em>light</em> color. Somewhere in
            the middle? Then it's <em>medium</em>.
          </p>
          <LightnessWidget color={colorModel} />
        </Section>

        <Section step={5} title="Get the saturation from the range" dim={!colorModel.isSaturationRelevant}>
          <p>
            Finally to get the saturation, you have to estimate the <em>range</em> of the color. To do that, take the
            biggest value and the smallest value. For example, in the current example the biggest value is{" "}
            <em>{formatSingleDigitComponent(Math.max(r, g, b))}</em> and the smallest value is{" "}
            <em>{formatSingleDigitComponent(Math.min(r, g, b))}</em>.
          </p>
          <p>
            If that range is small, then you have a desaturated color. A special case is when all three components are
            equal or really close, then it's a grey color.
          </p>
          <p>
            If the range is large, then the color is <em>saturated</em>.
          </p>
          <p>
            Finally, if the range is somewhere in between then you've got a <em>washed</em> or <em>muted</em> color.
          </p>

          <SaturationWidget color={colorModel} />
        </Section>

        <Profit />
      </div>
      <Result color={colorModel} />
    </>
  );
}

export default Learn;
