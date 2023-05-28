import statsCalculator from ".";

describe("stats calculator", () => {
  it("knows [2, 4, 21, -8, 53, 40] returns minimum value of -8", () => {
    const response = statsCalculator([2, 4, 21, -8, 53, 40]);
    expect(response.min).toBe(-8);
  });

  it("knows [2, 4, 21, -8, 53, 40] returns maximum value of 53", () => {
    const response = statsCalculator([2, 4, 21, -8, 53, 40]);
    expect(response.max).toBe(53);
  });
  it.todo("knows [2, 4, 21, -8, 53, 40] returns no of elements of 6");
  it.todo(
    "knows [2, 4, 21, -8, 53, 40] returns average value of 18.666666666667"
  );
});
