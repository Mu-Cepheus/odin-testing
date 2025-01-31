import analyzeArray from "./../scripts/analyzeArray.js";

test("Basic functionality", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toStrictEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});

test("Single item array", () => {
  expect(analyzeArray([3])).toStrictEqual({
    average: 3,
    min: 3,
    max: 3,
    length: 1,
  });
});
