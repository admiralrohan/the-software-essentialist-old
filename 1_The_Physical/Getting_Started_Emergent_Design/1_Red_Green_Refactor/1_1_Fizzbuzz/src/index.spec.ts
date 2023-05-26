import fizzbuzz from "./fizzbuzz";

describe("fizzbuzz", () => {
  it("knows that each return value is a string", () => {
    expect(typeof fizzbuzz(1)).toBe("string");
  });
});
