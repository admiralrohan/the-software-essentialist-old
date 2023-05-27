export default function palindrome(input: string): boolean {
  const reversedInput = input.split("").reverse().join("");

  return (
    input.toLowerCase().split(" ").join("") ===
    reversedInput.toLowerCase().split(" ").join("")
  );
}
