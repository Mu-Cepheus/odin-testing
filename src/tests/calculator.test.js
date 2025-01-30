import Calculator from "./../scripts/calculator.js";

test("Performs calculations", () => {
  expect(Calculator.add(7, 3)).toBe(10);
  expect(Calculator.subtract(5, 2)).toBe(3);
  expect(Calculator.divide(9, 3)).toBe(3);
  expect(Calculator.multiply(5, 5)).toBe(25);
});
