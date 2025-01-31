export default function analyzeArray(argArray) {
  let sorted = argArray.sort((a, b) => a - b);
  let average = 0;
  for (let i = 0; i < sorted.length; i++) {
    average += sorted[i];
  }
  average /= sorted.length;
  return {
    average,
    min: sorted[0],
    max: sorted[sorted.length - 1],
    length: sorted.length,
  };
}
