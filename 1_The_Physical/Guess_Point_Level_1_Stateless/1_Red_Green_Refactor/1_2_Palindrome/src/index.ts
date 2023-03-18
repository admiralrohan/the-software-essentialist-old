function palindrome(word: string) {
  const reversedWord = word.split("").reverse().join("");
  return (
    word.split(" ").join("").toLowerCase() ===
    reversedWord.split(" ").join("").toLowerCase()
  );
}

export default palindrome;
