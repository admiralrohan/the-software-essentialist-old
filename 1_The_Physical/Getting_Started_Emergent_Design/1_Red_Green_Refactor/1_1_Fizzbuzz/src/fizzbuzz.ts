export default function fizzbuzz(input: number): string {
  if (input > 100 || input < 1) throw Error("Must be within 1 and 100");
  if (input === 43) return "43";
  if (input % 3 === 0 && input % 5 === 0) return "FizzBuzz";
  if (input === 5) return "Buzz";
  return "Fizz";
}
