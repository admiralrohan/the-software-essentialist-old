import statsCalculator from ".";

describe("stats calculator", () => {
  const INPUT = [2, 4, 21, -8, 53, 40];

  it(`knows [${INPUT.join(", ")}] returns minimum value of -8`, () => {
    const response = statsCalculator(INPUT);
    expect(response.min).toBe(-8);
  });

  it(`knows [${INPUT.join(", ")}] returns maximum value of 53`, () => {
    const response = statsCalculator(INPUT);
    expect(response.max).toBe(53);
  });

  it(`knows [${INPUT.join(", ")}] returns no of elements of 6`, () => {
    const response = statsCalculator(INPUT);
    expect(response.noOfElements).toBe(6);
  });

  it(`knows [${INPUT.join(
    ", "
  )}] returns average value of 18.666666666667`, () => {
    const response = statsCalculator(INPUT);
    expect(response.avg).toBe(18.666666666667);
  });
});
