function palindrome(word: string) {
  const reversedWord = word.split("").reverse().join("");
  return word === reversedWord;
}

export default palindrome;
