const toBool: { [key: string]: boolean } = {
  FALSE: false,
  TRUE: true,
};

export default function booleanCalculator(expression: string): boolean {
  const words = expression.split(" ");

  // First extract out sub-expressions from parenthesis, so we can focus on solving them
  let wordsWithParenthesis: (string | string[])[] = [];
  for (let i = 0; i < words.length; ) {
    if (words[i][0] === "(") {
      const tempWords = [words[i].slice(1)];
      i++;

      while (words[i][words[i].length - 1] !== ")") {
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

  const wordsWithoutNesting: string[] = [];
  wordsWithParenthesis.forEach((word) => {
    const newWord = Array.isArray(word)
      ? processExpressionWithoutParenthesis(word)
      : word;
    wordsWithoutNesting.push(newWord);
  });

  const finalResult = processExpressionWithoutParenthesis(wordsWithoutNesting);
  return toBool[finalResult];
}

function processExpressionWithoutParenthesis(words: string[]): string {
  let wordsLength = words.length;

  // NOT is higher on priority so lets solve those sub-expression first
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

  // Then solve AND sub-expressions
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

  // And at the end solve OR sub-expressions
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
