import checkPassword from "./index";

describe("password validator", () => {
  it('knows strings like "pass" are invalid for having less than 5 characters', () => {
    const response = checkPassword("pass");

    expect(response.result).toBeFalsy();
    expect(response.errors.length).toBeGreaterThanOrEqual(1);
    expect(response.errors).toContain("InvalidLengthError");
  });

  it('knows strings like "passwordpassword" are invalid for having more than 15 characters', () => {
    const response = checkPassword("passwordpassword");

    expect(response.result).toBeFalsy();
    expect(response.errors.length).toBeGreaterThanOrEqual(1);
    expect(response.errors).toContain("InvalidLengthError");
  });

  it('knows strings like "password" are invalid for not having atleast 1 digit', () => {
    const response = checkPassword("password");

    expect(response.result).toBeFalsy();
    expect(response.errors.length).toBeGreaterThanOrEqual(1);
    expect(response.errors).toContain("NoDigitError");
  });

  it('knows strings like "password" are invalid for not having atleast 1 uppercase letter', () => {
    const response = checkPassword("password");

    expect(response.result).toBeFalsy();
    expect(response.errors.length).toBeGreaterThanOrEqual(1);
    expect(response.errors).toContain("NoUppercaseError");
  });

  it('knows strings like "pass" are invalid for multiple reasons', () => {
    const response = checkPassword("pass");

    expect(response.result).toBeFalsy();
    expect(response.errors.length).toBeGreaterThanOrEqual(3);
    expect(response.errors).toContain("InvalidLengthError");
    expect(response.errors).toContain("NoUppercaseError");
    expect(response.errors).toContain("NoDigitError");
  });
});
