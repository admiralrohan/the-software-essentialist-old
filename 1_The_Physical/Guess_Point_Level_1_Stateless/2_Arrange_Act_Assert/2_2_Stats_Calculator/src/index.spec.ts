import statsCalculator from "./index";

describe("stats calculator", () => {
  it("should return minimum value", () => {
    const result = statsCalculator([2, 4, 21, -8, 53, 40]);
    expect(result.min).toBe(-8);
  });

  it("should return maximum value", () => {
    const result = statsCalculator([2, 4, 21, -8, 53, 40]);
    expect(result.max).toBe(53);
  });

  it("should return no of elements in sequence", () => {
    const result = statsCalculator([2, 4, 21, -8, 53, 40]);
    expect(result.noOfElements).toBe(6);
  });

  it("should return average value", () => {
    const result = statsCalculator([2, 4, 21, -8, 53, 40]);
    expect(result.avg).toBe(18.666666666667);
  });
});
