interface IResponse {
  result: boolean;
  errors: string[];
}

export default function checkPassword(input: string): IResponse {
  const noOfDigits = input
    .split("")
    .filter((char) => !isNaN(Number(char))).length;
  const noOfUppercaseLetters = input
    .split("")
    .filter((char) => char.toUpperCase() === char).length;
  const isValidLength = input.length >= 5 && input.length <= 15;

  const errors: string[] = [];

  if (!isValidLength) errors.push("InvalidLengthError");
  if (noOfUppercaseLetters === 0) errors.push("NoUppercaseError");
  if (noOfDigits === 0) errors.push("NoDigitError");

  return {
    result: errors.length === 0,
    errors,
  };
}
