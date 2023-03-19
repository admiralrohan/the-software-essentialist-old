import isValidPassword from "./index";

describe("password validator", () => {
  it("password should be valid if between 5 and 15 characters", () => {
    const password = "password";
    const { isValid } = isValidPassword(password);
    expect(isValid).toBeTruthy();
  });

  it("password should not be valid if less than 5 characters", () => {
    const password = "pass";
    const { isValid, errors } = isValidPassword(password);

    expect(isValid).toBeFalsy();
    expect(errors.includes("Less than 5 characters")).toBeTruthy();
  });
});
