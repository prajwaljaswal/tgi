import { add } from './calculator';

describe('String Calculator', () => {
  test('should return 0 for empty string', () => {
    expect(add("")).toBe(0);
  });

  test('should return number for single input', () => {
    expect(add("1")).toBe(1);
  });

  test('should return sum for two comma-separated numbers', () => {
    expect(add("1,2")).toBe(3);
  });

  test('should handle unknown amount of numbers', () => {
    expect(add("1,2,3,4")).toBe(10);
  });

  test('should support new line as delimiter', () => {
    expect(add("1\n2,3")).toBe(6);
  });

  test('should support custom delimiter', () => {
    expect(add("//;\n1;2")).toBe(3);
  });

  test('should throw on single negative number', () => {
    expect(() => add("1,-2")).toThrow("negative numbers not allowed -2");
  });

  test('should throw on multiple negative numbers', () => {
    expect(() => add("1,-2,-3")).toThrow("negative numbers not allowed -2,-3");
  });
});
