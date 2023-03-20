import isValidMilitaryTimeRange from "./index";

describe("military time validator", () => {
  it("'01:12 - 14:32' should be valid range", () => {
    expect(isValidMilitaryTimeRange("01:12 - 14:32")).toBeTruthy();
  });
});
