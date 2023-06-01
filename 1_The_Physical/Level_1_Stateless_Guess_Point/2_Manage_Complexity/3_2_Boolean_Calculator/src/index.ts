const toBool: { [key: string]: boolean } = {
  FALSE: false,
  TRUE: true,
};

// TRUE OR FALSE AND NOT FALSE
// [ 'TRUE', 'OR', 'FALSE', 'AND', 'NOT', 'FALSE' ]

export default function booleanCalculator(expression: string): boolean {
  let words = expression.split(" ");
  let wordsLength = words.length;
  // console.log(words);

  if (words.length > 3) {
    for (let i = 0; i < wordsLength; ) {
      if (words[i] === "NOT") {
        const result = words[i + 1] === "TRUE" ? "FALSE" : "TRUE";
        words[i] = result;
        words = words.filter((_, index) => index !== i + 1);
        wordsLength = words.length;
      } else {
        i++;
      }
    }
    // console.log(words);

    for (let i = 0; i < words.length; ) {
      if (words[i] === "AND") {
        const result = toBool[words[i - 1]] && toBool[words[i + 1]];
        words[i] = result === true ? "TRUE" : "FALSE";
        words = words.filter((_, index) => index !== i - 1 && index !== i + 1);
        wordsLength = words.length;
      } else {
        i++;
      }
    }
    // console.log(words);

    for (let i = 0; i < words.length; ) {
      if (words[i] === "OR") {
        const result = toBool[words[i - 1]] || toBool[words[i + 1]];
        words[i] = result === true ? "TRUE" : "FALSE";
        words = words.filter((_, index) => index !== i - 1 && index !== i + 1);
        wordsLength = words.length;
      } else {
        i++;
      }
    }
    // console.log(words);
  }

  if (words.length === 3) {
    if (words[1] === "AND") return toBool[words[0]] && toBool[words[2]];
    return toBool[words[0]] || toBool[words[2]];
  }

  if (words.length === 2) {
    if (words[0] === "NOT" && words[1] === "TRUE") return false;
    return true;
  }

  return toBool[words[0]];
}
