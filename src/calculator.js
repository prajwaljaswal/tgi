// src/calculator.js

export function add(numbers) {
  if (!numbers) return 0;

  let delimiter = /,|\n/;
  let numberString = numbers;

  if (numbers.startsWith("//")) {
    const parts = numbers.split("\n");
    delimiter = new RegExp(parts[0].slice(2));
    numberString = parts[1];
  }

  const nums = numberString
    .split(delimiter)
    .map((n) => parseInt(n, 10))
    .filter((n) => !isNaN(n));

  const negatives = nums.filter((n) => n < 0);
  if (negatives.length > 0) {
    throw new Error(`negative numbers not allowed ${negatives.join(",")}`);
  }

  return nums.reduce((sum, num) => sum + num, 0);
}
