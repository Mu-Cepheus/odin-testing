export default function reverseString(argString) {
  if (argString) return [...argString].reverse().join("");
  else throw new Error("Falsy argument");
}
