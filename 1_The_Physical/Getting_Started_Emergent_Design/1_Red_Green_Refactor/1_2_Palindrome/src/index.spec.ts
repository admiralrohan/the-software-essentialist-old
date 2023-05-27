import palindrome from "./";

describe("palindrome checker", () => {
  it('"mom" returns true', () => {
    expect(palindrome("mom")).toBeTruthy();
  });

  it('"Mom" returns true', () => {
    expect(palindrome("Mom")).toBeTruthy();
  });

  it('"MoM" returns true', () => {
    expect(palindrome("MoM")).toBeTruthy();
  });

  it('"Momx" returns false', () => {
    expect(palindrome("Momx")).toBeFalsy();
  });

  it('"xMomx" returns true', () => {
    expect(palindrome("xMomx")).toBeTruthy();
  });

  it('"Was It A Rat I Saw" returns true', () => {
    expect(palindrome("Was It A Rat I Saw")).toBeTruthy();
  });

  it('"Never Odd or Even" returns true', () => {
    expect(palindrome("Never Odd or Even")).toBeTruthy();
  });
});
