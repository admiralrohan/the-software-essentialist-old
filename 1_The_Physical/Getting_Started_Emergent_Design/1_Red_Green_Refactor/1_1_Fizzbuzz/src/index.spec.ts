import fizzbuzz from "./fizzbuzz";

describe("fizzbuzz", () => {
  it("knows that each return value is a string", () => {
    expect(typeof fizzbuzz(1)).toBe("string");
  });

  it("knows that 3 returns 'Fizz' as this is multiple of 3", () => {
    expect(fizzbuzz(3)).toBe("Fizz");
  });

  it("knows that 5 returns 'Buzz' as this is multiple of 3", () => {
    expect(fizzbuzz(5)).toBe("Buzz");
  });
});
