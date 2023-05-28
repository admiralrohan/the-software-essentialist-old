interface IResult {
  result: boolean;
  errors: string[];
}

export default function checkPassword(input: string): IResult {
  return {
    result: false,
    errors: ["InvalidLengthError"],
  };
}
