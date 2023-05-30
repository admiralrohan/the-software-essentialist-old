import statsCalculator from ".";

describe("stats calculator", () => {
  const STANDARD_INPUT = [2, 4, 21, -8, 53, 40];
  const INPUT_WITH_ZERO = [2, 4, 0, -6];

  describe("should return minimum value among passed numbers", () => {
    it.each([
      [STANDARD_INPUT, -8],
      [INPUT_WITH_ZERO, -6],
    ])(
      "knows %p returns minimum value of %p",
      (input: number[], result: number) => {
        const response = statsCalculator(input);
        expect(response.min).toBe(result);
      }
    );
  });

  it(`knows [${STANDARD_INPUT.join(", ")}] returns maximum value of 53`, () => {
    const response = statsCalculator(STANDARD_INPUT);
    expect(response.max).toBe(53);
  });

  it(`knows [${STANDARD_INPUT.join(", ")}] returns no of elements of 6`, () => {
    const response = statsCalculator(STANDARD_INPUT);
    expect(response.noOfElements).toBe(6);
  });

  it(`knows [${STANDARD_INPUT.join(
    ", "
  )}] returns average value of 18.666666666667`, () => {
    const response = statsCalculator(STANDARD_INPUT);
    expect(response.avg).toBe(18.666666666667);
  });
});
