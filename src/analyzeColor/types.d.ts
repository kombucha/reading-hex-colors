export interface ColorModel {
  originalInput: string;
  shorthand: string;
  expanded: string;
  rgb: number[];
  hsl?: number[];
  hue: string;
  saturation: string;
  lightness: string;
  isSaturationRelevant: boolean;
  isLightnessRelevant: boolean;
}
