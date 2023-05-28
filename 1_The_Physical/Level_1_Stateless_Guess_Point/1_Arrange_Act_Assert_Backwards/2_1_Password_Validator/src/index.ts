interface IResult {
  result: boolean;
  errors: string[];
}

export default function checkPassword(input: string): IResult {
  const noOfDigits = input
    .split("")
    .filter((char) => typeof char === "number").length;
  const isValidLength = input.length >= 5 && input.length <= 15;

  if (!isValidLength) {
    return {
      result: false,
      errors: ["InvalidLengthError"],
    };
  }

  if (noOfDigits === 0) {
    return {
      result: false,
      errors: ["NoDigitError"],
    };
  }

  return {
    result: true,
    errors: [],
  };
}
