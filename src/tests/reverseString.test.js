import reverseString from "./../scripts/reverseString.js";

test("Actual function features", () => {
  expect(reverseString("bruhlovania")).toBe("ainavolhurb");
});

test("Respect capitalization", () => {
  expect(reverseString("CHilL mAn")).toBe("nAm LliHC");
});

test("Reverse strings with numbers", () => {
  expect(reverseString("1235643")).toBe("3465321");
});

test("Falsy arguments", () => {
  expect(() => reverseString()).toThrow("Falsy argument");
  expect(() => reverseString(null)).toThrow("Falsy argument");
  expect(() => reverseString(undefined)).toThrow("Falsy argument");
  expect(() => reverseString(0)).toThrow("Falsy argument");
});
