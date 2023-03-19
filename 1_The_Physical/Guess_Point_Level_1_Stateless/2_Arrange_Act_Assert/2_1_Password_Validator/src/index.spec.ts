import isValidPassword from "./index";

describe("password validator", () => {
  it("password should be valid if between 5 and 15 characters", () => {
    const password = "password";
    const result = isValidPassword(password);
    expect(result).toBeTruthy();
  });
});
