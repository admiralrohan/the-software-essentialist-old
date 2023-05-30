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

  describe("should return maximum value among passed numbers", () => {
    it.each([
      [STANDARD_INPUT, 53],
      [INPUT_WITH_ZERO, 4],
    ])(
      "knows %p returns maximum value of %p",
      (input: number[], result: number) => {
        const response = statsCalculator(input);
        expect(response.max).toBe(result);
      }
    );
  });

  describe("should return no of elements among passed numbers", () => {
    it.each([
      [STANDARD_INPUT, 6],
      [INPUT_WITH_ZERO, 4],
    ])(
      "knows %p returns no of elements of %p",
      (input: number[], result: number) => {
        const response = statsCalculator(input);
        expect(response.noOfElements).toBe(result);
      }
    );
  });

  describe("should return average value among passed numbers", () => {
    it.each([
      [STANDARD_INPUT, 18.666666666667],
      [INPUT_WITH_ZERO, 0],
    ])(
      "knows %p returns average value of %p",
      (input: number[], result: number) => {
        const response = statsCalculator(input);
        expect(response.avg).toBe(result);
      }
    );
  });
});
