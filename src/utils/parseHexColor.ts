import { validateColor } from "./validateColor";

function chunk<T>(arr: Array<T>, chunkSize = 1) {
  const result = [];
  let i = 0;

  while (i < arr.length) {
    result.push(arr.slice(i, i + chunkSize));
    i += chunkSize;
  }

  return result;
}

export default function parseHexColor(hexColor: string, simplified = false) {
  const DEFAULT_COLOR = [0, 0, 0];

  if (hexColor.startsWith("#")) {
    hexColor = hexColor.slice(1);
  }

  if (!validateColor(hexColor)) return DEFAULT_COLOR;

  switch (hexColor.length) {
    case 3:
      return Array.from(hexColor).map(char => parseInt(char.repeat(2), 16));
    case 6:
      return chunk(Array.from(hexColor), 2).map(arr => {
        const numStr = simplified ? arr[0].repeat(2) : arr.join("");
        return parseInt(numStr, 16);
      });
    default:
      return DEFAULT_COLOR;
  }
}
