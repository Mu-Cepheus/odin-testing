export default function capitalize(argWord) {
  if (argWord) {
    if (typeof argWord === "string")
      return argWord.charAt(0).toUpperCase() + argWord.slice(1);
    else throw new Error("Non-string argument passed");
  } else throw new Error("Falsy argument passed");
}
