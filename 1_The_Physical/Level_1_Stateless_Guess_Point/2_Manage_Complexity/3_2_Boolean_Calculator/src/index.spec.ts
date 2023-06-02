import booleanCalculator from ".";

describe("boolean calculator", () => {
  describe("should handle single values", () => {
    it(`knows "TRUE" returns true`, () => {
      expect(booleanCalculator("TRUE")).toBeTruthy();
    });
    it(`knows "FALSE" returns false`, () => {
      expect(booleanCalculator("FALSE")).toBeFalsy();
    });
  });

  describe("should handle NOT operator", () => {
    it(`knows "NOT TRUE" returns false`, () => {
      expect(booleanCalculator("NOT TRUE")).toBeFalsy();
    });
  });

  describe("should handle AND operator", () => {
    it(`knows "TRUE AND FALSE" returns false`, () => {
      expect(booleanCalculator("TRUE AND FALSE")).toBeFalsy();
    });
    it(`knows "TRUE AND TRUE" returns true`, () => {
      expect(booleanCalculator("TRUE AND TRUE")).toBeTruthy();
    });
  });

  describe("should handle OR operator", () => {
    it(`knows "TRUE OR FALSE" returns true`, () => {
      expect(booleanCalculator("TRUE OR FALSE")).toBeTruthy();
    });
    it(`knows "FALSE OR FALSE" returns false`, () => {
      expect(booleanCalculator("FALSE OR FALSE")).toBeFalsy();
    });
  });

  describe("should handle combination of operators w/ precedence", () => {
    it(`knows "TRUE OR TRUE OR TRUE AND FALSE" returns true`, () => {
      expect(booleanCalculator("TRUE OR TRUE OR TRUE AND FALSE")).toBeTruthy();
    });
    it(`knows "TRUE OR FALSE AND NOT FALSE" returns false`, () => {
      expect(booleanCalculator("TRUE OR FALSE AND NOT FALSE")).toBeTruthy();
    });
  });

  describe("should handle parenthesis", () => {
    it(`knows "(TRUE OR TRUE OR TRUE) AND FALSE" returns false`, () => {
      expect(booleanCalculator("(TRUE OR TRUE OR TRUE) AND FALSE")).toBeFalsy();
    });
    it(`knows "NOT (TRUE AND TRUE)" returns false`, () => {
      expect(booleanCalculator("NOT (TRUE AND TRUE)")).toBeFalsy();
    });
    it(`knows "NOT (TRUE AND TRUE) OR TRUE" returns true`, () => {
      expect(booleanCalculator("NOT (TRUE AND TRUE) OR TRUE")).toBeTruthy();
    });
  });
});
