import palindrome from "./";

describe("palindrome checker", () => {
  it('"mom" returns true', () => {
    expect(palindrome("mom")).toBeTruthy();
  });

  it('"Mom" returns true', () => {
    expect(palindrome("Mom")).toBeTruthy();
  });
});
