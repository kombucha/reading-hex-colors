export default function getLightness(rgb: number[]) {
  const sum = rgb.reduce((acc, val) => acc + val / 0xff, 0) / 3;

  if (sum < 0.3) {
    return "dark";
  } else if (sum < 0.6) {
    return "medium";
  }

  return "light";
}
