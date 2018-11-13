import { WHITE, BLACK, COLOR_MAP } from "./baseColors";
import parseHexColor from "./parseHexColor";

export default function getHue(rgb: number[]) {
  if (rgb.every(c => c === 0xff)) {
    return WHITE;
  } else if (rgb.every(c => c === 0)) {
    return BLACK;
  } else if (rgb.every(c => c === rgb[0])) {
    return {
      name: "grey",
      value: rgb.map(c => c.toString(16)).join()
    };
  }

  const errors = COLOR_MAP.map(color => {
    const parsedColor = parseHexColor(color.value);
    return rgb.reduce((sum, c, idx) => sum + (c - parsedColor[idx]) ** 2, 0) / rgb.length;
  });

  const indexOfMin = COLOR_MAP.reduce((res, _current, idx) => {
    return errors[idx] < errors[res] ? idx : res;
  }, 0);

  return COLOR_MAP[indexOfMin];
}
