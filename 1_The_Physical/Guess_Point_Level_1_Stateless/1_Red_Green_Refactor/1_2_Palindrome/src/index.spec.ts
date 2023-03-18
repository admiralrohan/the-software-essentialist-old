import palindrome from "./index";

describe("palindrome checker", () => {
  it("'mom' should be palindrome", () => {
    expect(palindrome("mom")).toBeTruthy();
  });

  it("'wow' should be palindrome", () => {
    expect(palindrome("wow")).toBeTruthy();
  });
});
