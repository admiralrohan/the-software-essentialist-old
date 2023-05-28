interface IResponse {
  result: boolean;
  errors: string[];
}

export default function checkPassword(password: string): IResponse {
  const noOfDigits = password
    .split("")
    .filter((char) => !isNaN(Number(char))).length;
  const noOfUppercaseLetters = password
    .split("")
    .filter((char) => char.toUpperCase() === char).length;
  const isValidLength = password.length >= 5 && password.length <= 15;

  const errors: string[] = [];

  if (!isValidLength) errors.push("InvalidLengthError");
  if (noOfUppercaseLetters === 0) errors.push("NoUppercaseError");
  if (noOfDigits === 0) errors.push("NoDigitError");

  return {
    result: errors.length === 0,
    errors,
  };
}
