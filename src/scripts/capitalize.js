export default function capitalize(argString) {
  if (argString) {
    if (typeof argString === "string")
      return argString.charAt(0).toUpperCase() + argString.slice(1);
    else throw new Error("Non-string argument passed");
  } else throw new Error("Falsy argument passed");
}
