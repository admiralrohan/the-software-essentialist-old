import palindrome from "./";

describe("palindrome checker", () => {
  it('"mom" returns true', () => {
    expect(palindrome("mom")).toBeTruthy();
  });
});
