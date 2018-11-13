export default function getSaturation(rgb: number[]) {
  const normalizedComponents = rgb.map(c => c / 0xff);
  const diff = Math.max(...normalizedComponents) - Math.min(...normalizedComponents);

  if (diff === 0) {
    return "monochrome";
  } else if (diff < 1 / 4) {
    return "washed";
  } else if (diff < 2 / 4) {
    return "muted";
  }

  return "saturated";
}
