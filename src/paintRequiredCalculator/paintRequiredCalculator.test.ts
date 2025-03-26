import paintRequiredCalculator from "./paintRequiredCalculator";

describe("paintRequiredCalculator", () => {
  test("should return expected result for standard inputs", () => {
    expect(paintRequiredCalculator(50, 10)).toEqual(5);
    expect(paintRequiredCalculator(100, 25)).toEqual(4);
  });

  test("should return 0 when area is 0", () => {
    expect(paintRequiredCalculator(0, 10)).toEqual(0);
  });

  test("should return Infinity when coveragePerLiter is 0", () => {
    expect(paintRequiredCalculator(50, 0)).toEqual(Infinity);
  });

  test("should handle negative values correctly", () => {
    expect(paintRequiredCalculator(-50, 10)).toEqual(-5);
    expect(paintRequiredCalculator(50, -10)).toEqual(-5);
    expect(paintRequiredCalculator(-50, -10)).toEqual(5);
  });

  test("should handle decimal values correctly", () => {
    expect(paintRequiredCalculator(25.5, 5.1)).toBeCloseTo(5);
  });
});
