import palindrome from "./index";

describe("palindrome checker", () => {
  it("'mom' should be palindrome", () => {
    expect(palindrome("mom")).toBeTruthy();
  });

  it("'wow' should be palindrome", () => {
    expect(palindrome("wow")).toBeTruthy();
  });

  it("'bill' should not be palindrome", () => {
    expect(palindrome("bill")).toBeFalsy();
  });

  it("'Mom' should be palindrome", () => {
    expect(palindrome("Mom")).toBeTruthy();
  });

  it("'Was It A Rat I Saw' should be palindrome", () => {
    expect(palindrome("Was It A Rat I Saw")).toBeTruthy();
  });
});
