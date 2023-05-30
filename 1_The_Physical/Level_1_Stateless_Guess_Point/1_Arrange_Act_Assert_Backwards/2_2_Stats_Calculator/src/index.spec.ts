import statsCalculator, { IResponse } from ".";

interface IData {
  input: number[];
  response: IResponse;
}

describe("stats calculator", () => {
  const STANDARD_DATA: IData = {
    input: [2, 4, 21, -8, 53, 40],
    response: { min: -8, max: 53, noOfElements: 6, avg: 18.666666666667 },
  };
  const DATA_WITH_ZERO: IData = {
    input: [2, 4, 0, -6],
    response: { min: -6, max: 4, noOfElements: 4, avg: 0 },
  };

  describe("should return minimum value among passed numbers", () => {
    it.each([
      [STANDARD_DATA.input, STANDARD_DATA.response.min],
      [DATA_WITH_ZERO.input, DATA_WITH_ZERO.response.min],
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
      [STANDARD_DATA.input, STANDARD_DATA.response.max],
      [DATA_WITH_ZERO.input, DATA_WITH_ZERO.response.max],
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
      [STANDARD_DATA.input, STANDARD_DATA.response.noOfElements],
      [DATA_WITH_ZERO.input, DATA_WITH_ZERO.response.noOfElements],
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
      [STANDARD_DATA.input, STANDARD_DATA.response.avg],
      [DATA_WITH_ZERO.input, DATA_WITH_ZERO.response.avg],
    ])(
      "knows %p returns average value of %p",
      (input: number[], result: number) => {
        const response = statsCalculator(input);
        expect(response.avg).toBe(result);
      }
    );
  });
});
