import isValidPassword from "./index";

describe("password validator", () => {
  it("password should not be valid if less than 5 characters", () => {
    const password = "pass";
    const { isValid, errors } = isValidPassword(password);

    expect(isValid).toBeFalsy();
    expect(errors.includes("Less than 5 characters")).toBeTruthy();
  });

  it("password should not be valid if more than 15 characters", () => {
    const password = "passwordpassword";
    const { isValid, errors } = isValidPassword(password);

    expect(isValid).toBeFalsy();
    expect(errors.includes("More than 15 characters")).toBeTruthy();
  });

  it("password should not be valid if has less than 1 digit", () => {
    const password = "password";
    const { isValid, errors } = isValidPassword(password);

    expect(isValid).toBeFalsy();
    expect(errors.includes("Less than 1 digit")).toBeTruthy();
  });

  it("password should not be valid if has less than 1 uppercase letter", () => {
    const password = "password";
    const { isValid, errors } = isValidPassword(password);

    expect(isValid).toBeFalsy();
    expect(errors.includes("Less than 1 uppercase letter")).toBeTruthy();
  });

  it("password should be valid if all conditions are met", () => {
    const password = "passwoRD123";
    const { isValid, errors } = isValidPassword(password);

    expect(isValid).toBeTruthy();
    expect(errors.length).toBe(0);
  });
});
