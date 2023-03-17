import fizzbuzz from "./fizzbuzz";

describe("fizzbuzz", () => {
  it("should accept from 1 to 100", () => {
    expect(fizzbuzz([3, 5, 7, 15])).toBeTruthy();
  });
  it("should not accept numbers less than 1", () => {
    expect(() => fizzbuzz([-1])).toThrow();
  });
  it("should not accept numbers greater than 100", () => {
    expect(() => fizzbuzz([101])).toThrow();
  });
  it("should return 'FizzBuzz7FizzBuzz' for '[3, 5, 7, 15]'", () => {
    expect(fizzbuzz([3, 5, 7, 15])).toBe("FizzBuzz7FizzBuzz");
  });
});
