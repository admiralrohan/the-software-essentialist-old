function getReversedPhrase(phrase: string) {
  return phrase.split("").reverse().join("");
}

function getFormattedPhrase(phrase: string) {
  return phrase.split(" ").join("").toLowerCase();
}

function palindrome(phrase: string) {
  return (
    getFormattedPhrase(phrase) === getFormattedPhrase(getReversedPhrase(phrase))
  );
}

export default palindrome;
