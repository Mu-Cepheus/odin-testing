import caesarCipher from "./../scripts/caesarCipher.js";

test("Preserves cases", () => {
  expect(caesarCipher("HeLLo", 3)).toBe("KhOOr");
});

test("Alphabet wrapping", () => {
  expect(caesarCipher("xyz", 3)).toBe("abc");
});

test("Preserves punctuation", () => {
  expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
});
