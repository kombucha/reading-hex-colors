import mem from "mem";

import { ColorModel } from "./types";
import { shorthandColor } from "./shorthandColor";
import { WHITE, BLACK } from "./baseColors";
import expandColor from "./expandColor";
import getHue from "./getHue";
import getLightness from "./getLightness";
import getSaturation from "./getSaturation";
import parseHexColor from "./parseHexColor";
import rgbToHsl from "./rgbToHsl";

export default mem(function analyzeColor(inputColor: string): ColorModel {
  const rgb = parseHexColor(inputColor);
  const hsl = rgbToHsl(rgb);
  const { name: hue } = getHue(rgb);

  const isSaturationRelevant = rgb[0] !== rgb[1] || rgb[1] !== rgb[2];
  const isLightnessRelevant = hue !== WHITE.name && hue !== BLACK.name;

  return {
    originalInput: inputColor,
    shorthand: shorthandColor(rgb),
    expanded: expandColor(rgb),
    rgb,
    hsl,
    hue,
    saturation: getSaturation(rgb),
    lightness: getLightness(rgb),
    isSaturationRelevant,
    isLightnessRelevant
  };
});
