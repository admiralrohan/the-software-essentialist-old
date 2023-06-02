const toBool: { [key: string]: boolean } = {
  FALSE: false,
  TRUE: true,
};

// TRUE OR FALSE AND NOT FALSE
// [ 'TRUE', 'OR', 'FALSE', 'AND', 'NOT', 'FALSE' ]

// (TRUE OR TRUE OR TRUE) AND FALSE

export default function booleanCalculator(expression: string): boolean {
  let words = expression.split(" ");

  let wordsWithParenthesis: any = [];
  for (let i = 0; i < words.length; ) {
    if (words[i][0] === "(") {
      const tempWords = [words[i].slice(1)];
      i++;

      while (words[i][words[i].length - 1] !== ")" || i > 10) {
        tempWords.push(words[i]);
        i++;
      }
      tempWords.push(words[i].slice(0, -1));
      i++;
      wordsWithParenthesis.push(tempWords);
    } else {
      wordsWithParenthesis.push(words[i]);
      i++;
    }
  }

  // console.log(words, wordsWithParenthesis);

  for (let i = 0; i < wordsWithParenthesis.length; i++) {
    const word = wordsWithParenthesis[i];
    if (Array.isArray(word)) {
      wordsWithParenthesis[i] = processExpressionWithoutParenthesis(word);
    }
  }

  // console.log("After", wordsWithParenthesis);

  const finalResult = processExpressionWithoutParenthesis(wordsWithParenthesis);
  return toBool[finalResult];
}

function processExpressionWithoutParenthesis(words: string[]): string {
  let wordsLength = words.length;

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

  return words[0];
}
