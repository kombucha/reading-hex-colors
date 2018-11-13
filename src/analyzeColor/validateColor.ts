export const VALID_HEX_COLOR_PATTERN = "^#?(?:[a-fA-F0-9]{3}|[a-fA-F0-9]{6})$";
const compiledRegex = new RegExp(VALID_HEX_COLOR_PATTERN);

export function validateColor(color: string) {
  return !!color.match(compiledRegex);
}
