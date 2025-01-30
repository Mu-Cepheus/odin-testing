import caesarCipher from "./../scripts/caesarCipher.js";

test("Encrypts text", () => {
  expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
});
