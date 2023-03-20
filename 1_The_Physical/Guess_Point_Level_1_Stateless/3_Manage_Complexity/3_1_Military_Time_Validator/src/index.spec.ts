import isValidMilitaryTimeRange from "./index";

describe("military time validator", () => {
  it("'01:12 - 14:32' should be valid range", () => {
    expect(isValidMilitaryTimeRange("01:12 - 14:32")).toBeTruthy();
  });

  it("'25:00 - 12:23' should not be valid range", () => {
    expect(isValidMilitaryTimeRange("25:00 - 12:23")).toBeFalsy();
  });

  it("'22:00 - 23:12' should be valid range", () => {
    expect(isValidMilitaryTimeRange("22:00 - 23:12")).toBeTruthy();
  });
});
