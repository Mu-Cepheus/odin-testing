export default function caesarCipher(argString, argShift) {
  let encrypted = [];
  for (let i = 0; i < argString.length; i++) {
    const char = argString.charCodeAt(i);
    if (char >= 65 && char <= 90)
      encrypted.push(String.fromCharCode(((char - 65 + argShift) % 26) + 65));
    else if (char >= 97 && char <= 122)
      encrypted.push(String.fromCharCode(((char - 97 + argShift) % 26) + 97));
    else encrypted.push(argString[i]);
  }
  return encrypted.join("");
}
