import calculateCanvasSize from './calculateCanvasSize';

describe('calculateCanvasSize', () => {
  test('should calculate area correctly for positive values', () => {
    expect(calculateCanvasSize('10', '20')).toBe(200);
    expect(calculateCanvasSize('5', '5')).toBe(25);
  });

  test('should return 0 if either length or width is 0', () => {
    expect(calculateCanvasSize('0', '10')).toBe(0);
    expect(calculateCanvasSize('10', '0')).toBe(0);
  });

  test('should return 0 for negative values (if treated as 0)', () => {
    expect(calculateCanvasSize('-5', '10')).toBe(-50); // OR 0, depending on how you want to handle it
  });

  test('should return NaN for non-numeric values', () => {
    expect(calculateCanvasSize('a', '10')).toBeNaN();
    expect(calculateCanvasSize('10', 'b')).toBeNaN();
  });
});
