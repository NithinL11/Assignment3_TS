export default function calculateCanvasSize(length: string, width: string): number {
  const l = parseFloat(length);
  const w = parseFloat(width);

  // Return NaN if input is not a number
  if (isNaN(l) || isNaN(w)) {
    return NaN;
  }

  // Return 0 if either length or width is negative
  if (l < 0 || w < 0) {
    return 0;
  }

  return 2 * (l + w); // Perimeter formula
}
