import fizzbuzz from "./fizzbuzz";

describe("fizzbuzz", () => {
  it("knows that each return value is a string", () => {
    expect(typeof fizzbuzz(1)).toBe("string");
  });

  it("knows that 3 returns 'Fizz' as this is multiple of 3", () => {
    expect(fizzbuzz(3)).toBe("Fizz");
  });

  it("knows that 5 returns 'Buzz' as this is multiple of 5", () => {
    expect(fizzbuzz(5)).toBe("Buzz");
  });

  it("knows that 15 returns 'FizzBuzz' as this is multiple of both 3 and 5", () => {
    expect(fizzbuzz(15)).toBe("FizzBuzz");
  });

  it("knows that 9 returns 'Fizz' as this is multiple of 3", () => {
    expect(fizzbuzz(9)).toBe("Fizz");
  });

  it("knows that 43 returns '43' as this is multiple of 3 or 5", () => {
    expect(fizzbuzz(43)).toBe("43");
  });
});
