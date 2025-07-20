import { add } from '../calculator';

describe('String Calculator', () => {
  test('should return 0 for empty string', () => {
    expect(add("")).toBe(0);
  });

  test('should return number for single input', () => {
expect(add("1")).toBe(1);
});

 
});
