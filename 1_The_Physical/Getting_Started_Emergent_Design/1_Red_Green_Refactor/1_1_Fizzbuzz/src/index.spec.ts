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

  it("knows that 43 returns '43' as this is multiple of neither 3 or 5", () => {
    expect(fizzbuzz(43)).toBe("43");
  });

  it("knows that 42 returns 'Fizz' as this is multiple of 3", () => {
    expect(fizzbuzz(42)).toBe("Fizz");
  });

  it("knows that 45 returns 'FizzBuzz' as this is multiple of both 3 and 5", () => {
    expect(fizzbuzz(45)).toBe("FizzBuzz");
  });

  it("knows that 102 throws error as this is outside of range of 1 and 100", () => {
    expect(() => fizzbuzz(102)).toThrowError();
  });

  it("knows that -12 throws error as this is outside of range of 1 and 100", () => {
    expect(() => fizzbuzz(-12)).toThrowError();
  });

  it("knows that NaN throws error as this is outside of range of 1 and 100", () => {
    expect(() => fizzbuzz(NaN)).toThrowError();
  });
});
