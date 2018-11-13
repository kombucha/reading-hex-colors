export const VALID_HEX_COLOR_PATTERN = "^#?(?:[a-f0-9]{3}|[a-f0-9]{6})$";
const compiledRegex = new RegExp(VALID_HEX_COLOR_PATTERN, "i");

export function validateColor(color: string) {
  return !!color.match(compiledRegex);
}
