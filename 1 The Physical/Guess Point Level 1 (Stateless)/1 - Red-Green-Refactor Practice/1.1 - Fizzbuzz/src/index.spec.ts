import fizzbuzz from "./fizzbuzz";

describe("fizzbuzz", () => {
  it("should accept from 1 to 100", () => {
    expect(fizzbuzz(3, 15)).toBeTruthy();
  });
  it("should not accept numbers less than 1", () => {});
  it("should not accept numbers greater than 100", () => {});
  it("should return numbers as strings", () => {});
});