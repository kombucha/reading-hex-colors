export interface ColorModel {
  originalInput: string;
  shorthand: string;
  expanded: string;
  rgb: number[];
  hsl: number[];
  hue: string;
  saturation: string;
  lightness: "dark" | "medium" | "light";
  isSaturationRelevant: boolean;
  isLightnessRelevant: boolean;
}
