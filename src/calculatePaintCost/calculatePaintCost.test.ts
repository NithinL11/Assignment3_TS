import calculatePaintCost from './calculatePaintCost';

describe('calculatePaintCost', () => {
  test('should calculate paint cost correctly for positive values', () => {
    expect(calculatePaintCost(10, 5)).toBe(50);
    expect(calculatePaintCost(20, 7.5)).toBe(150);
    expect(calculatePaintCost(15, 10)).toBe(150);
  });

  test('should return 0 when paint required is 0', () => {
    expect(calculatePaintCost(0, 5)).toBe(0);
  });

  test('should return 0 when cost per liter is 0', () => {
    expect(calculatePaintCost(10, 0)).toBe(0);
  });

  test('should handle negative values correctly', () => {
    expect(calculatePaintCost(-10, 5)).toBe(-50);
    expect(calculatePaintCost(10, -5)).toBe(-50);
    expect(calculatePaintCost(-10, -5)).toBe(50);
  });
  test('should handle decimal values correctly', () => {
    expect(calculatePaintCost(2.5, 4.4)).toBeCloseTo(11);
  });
  
  test('should handle very large values', () => {
    expect(calculatePaintCost(1e6, 1e3)).toBe(1e9);
  });
  
  test('should handle very small values', () => {
    expect(calculatePaintCost(0.0001, 1000)).toBeCloseTo(0.1);
  });
});
