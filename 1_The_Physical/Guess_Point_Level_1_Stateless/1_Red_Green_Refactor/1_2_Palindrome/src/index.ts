function getReversedPhrase(phrase: string) {
  return phrase.split("").reverse().join("");
}

function withoutSpaces(phrase: string) {
  return phrase.split(" ").join("");
}

function palindrome(phrase: string) {
  return (
    withoutSpaces(phrase).toLowerCase() ===
    withoutSpaces(getReversedPhrase(phrase)).toLowerCase()
  );
}

export default palindrome;
