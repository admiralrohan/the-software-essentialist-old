import militaryTimeValidator from ".";

describe("military time validator", () => {
  it(`knows "01:12 - 14:32" is valid time range`, () => {
    expect(militaryTimeValidator("01:12 - 14:32")).toBeTruthy();
  });

  it(`knows "25:00 - 12:23" is not valid time range`, () => {
    expect(militaryTimeValidator("25:00 - 12:23")).toBeFalsy();
  });

  it(`knows "22:00 - 23:12" is valid time range`, () => {
    expect(militaryTimeValidator("22:00 - 23:12")).toBeTruthy();
  });

  it(`knows empty string is not valid time range`, () => {
    expect(militaryTimeValidator("")).toBeFalsy();
  });

  it(`knows "-22:00 - 23:12" is not valid time range`, () => {
    expect(militaryTimeValidator("-22:00 - 23:12")).toBeFalsy();
  });
});
