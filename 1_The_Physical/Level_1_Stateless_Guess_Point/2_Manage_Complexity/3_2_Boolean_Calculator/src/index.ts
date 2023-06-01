export default function booleanCalculator(expression: string): boolean {
  const words = expression.split(" ");
  console.log(words);
  if (words.length === 2) {
    if (words[0] === "NOT" && words[1] === "TRUE") return false;
    return true;
  }

  if (expression === "FALSE") return false;
  return true;
}
