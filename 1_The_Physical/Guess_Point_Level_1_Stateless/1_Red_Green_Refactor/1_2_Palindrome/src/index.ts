function palindrome(word: string) {
  const reversedWord = word.split("").reverse().join("");
  return word.toLowerCase() === reversedWord.toLowerCase();
}

export default palindrome;
