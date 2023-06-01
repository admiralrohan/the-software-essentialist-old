const converter: { [key: string]: boolean } = {
  FALSE: false,
  TRUE: true,
};

export default function booleanCalculator(expression: string): boolean {
  const words = expression.split(" ");
  console.log(words);

  if (words.length === 3) {
    if (words[1] === "AND") return converter[words[0]] && converter[words[2]];
    return true;
  }

  if (words.length === 2) {
    if (words[0] === "NOT" && words[1] === "TRUE") return false;
    return true;
  }

  return converter[words[0]];
}
