import capitalize from "./../scripts/capitalize.js";

test("Actually capitalizes", () => {
  expect(capitalize("bro")).toBe("Bro");
});

test("Falsy arguments", function () {
  expect(() => capitalize()).toThrow("Falsy argument");
  expect(() => capitalize(null)).toThrow("Falsy argument");
  expect(() => capitalize(undefined)).toThrow("Falsy argument");
  expect(() => capitalize(0)).toThrow("Falsy argument");
});

test("Non string types", () => {
  expect(() => capitalize(62)).toThrow("Non-string");
});
