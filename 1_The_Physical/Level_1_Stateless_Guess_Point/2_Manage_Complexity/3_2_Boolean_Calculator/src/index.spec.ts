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
    it.todo(`knows "FALSE OR FALSE" returns false`);
  });

  describe("should handle combination of operators w/ precedence", () => {
    it.todo(`knows "TRUE OR TRUE OR TRUE AND FALSE" returns true`);
    it.todo(`knows "TRUE OR FALSE AND NOT FALSE" returns false`);
  });

  describe("should handle parenthesis", () => {
    it.todo(`knows "(TRUE OR TRUE OR TRUE) AND FALSE" returns false`);
    it.todo(`knows "NOT (TRUE AND TRUE)" returns false`);
  });
});
