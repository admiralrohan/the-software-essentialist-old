function palindrome(phrase: string) {
  const reversedPhrase = phrase.split("").reverse().join("");

  return (
    phrase.split(" ").join("").toLowerCase() ===
    reversedPhrase.split(" ").join("").toLowerCase()
  );
}

export default palindrome;
