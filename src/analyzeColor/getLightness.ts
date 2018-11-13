export default function getLightness(rgb: number[]) {
  const sum = rgb.reduce((acc, val) => acc + val / 0xff);

  if (sum < 1.2) {
    return "dark";
  } else if (sum < 2) {
    return "medium";
  }

  return "light";
}
