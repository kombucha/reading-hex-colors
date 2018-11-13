export function shorthandColor([r, g, b]: number[]) {
  return `#${r.toString(16)[0]}${g.toString(16)[0]}${b.toString(16)[0]}`.toUpperCase();
}
