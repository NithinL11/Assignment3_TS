import calculateCanvasSize from './calculateCanvasSize';

describe("calculateCanvasSize", () => {
  test("should calculate perimeter correctly for positive values", () => {
    expect(calculateCanvasSize("10", "100")).toBe(220);
    expect(calculateCanvasSize("5", "5")).toBe(20);
  });

  test("should return 0 if both length and width are 0", () => {
    expect(calculateCanvasSize("0", "0")).toBe(0);
  });

  test("should handle negative values correctly", () => {
    expect(calculateCanvasSize("-5", "5")).toBe(0);  
    expect(calculateCanvasSize("5", "-5")).toBe(0);
    expect(calculateCanvasSize("-5", "-5")).toBe(0);
  });

  test("should return NaN for non-numeric values", () => {
    expect(calculateCanvasSize("abc", "5")).toBeNaN();
    expect(calculateCanvasSize("5", "xyz")).toBeNaN();
    expect(calculateCanvasSize("abc", "xyz")).toBeNaN();
  });
});
