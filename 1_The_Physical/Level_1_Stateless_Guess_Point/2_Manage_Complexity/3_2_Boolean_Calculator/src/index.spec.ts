describe("boolean calculator", () => {
  describe("should handle single values", () => {
    it.todo(`knows "TRUE" returns true`);
    it.todo(`knows "FALSE" returns false`);
  });

  describe("should handle NOT operator", () => {
    it.todo(`knows "NOT TRUE" returns false`);
  });

  describe("should handle AND operator", () => {
    it.todo(`knows "TRUE AND FALSE" returns false`);
    it.todo(`knows "TRUE AND TRUE" returns true`);
  });

  describe("should handle OR operator", () => {
    it.todo(`knows "TRUE OR FALSE" returns true`);
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
