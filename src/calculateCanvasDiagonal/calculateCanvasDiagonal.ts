export default function calculateCanvasDiagonal(
  length: string,
  width: string
): number {
  const l = parseFloat(length);
  const w = parseFloat(width);

  // Handle invalid input
  if (isNaN(l) || isNaN(w)) {
    return NaN;
  }

  // Diagonal = sqrt(length^2 + width^2)
  return Math.sqrt(Math.abs(l) ** 2 + Math.abs(w) ** 2);
}
