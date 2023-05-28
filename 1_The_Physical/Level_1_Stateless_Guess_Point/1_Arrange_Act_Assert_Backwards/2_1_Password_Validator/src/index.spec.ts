import checkPassword from "./index";

describe("password validator", () => {
  it('returns an invalid length error when strings like "mom" are less than 5 characters', () => {
    // arrange

    // act
    const response = checkPassword("mom");

    // assert
    expect(response.result).toBeFalsy();
    expect(response.errors.length).toEqual(1);
    expect(response.errors[0]).toEqual("InvalidLengthError");
  });

  it('returns an invalid length error when strings like "passwordpassword" are more than 15 characters', () => {
    const response = checkPassword("passwordpassword");

    expect(response.result).toBeFalsy();
    expect(response.errors.length).toEqual(1);
    expect(response.errors[0]).toEqual("InvalidLengthError");
  });

  it('returns error when strings like "password1" don\'t have atleast 1 digit', () => {
    const response = checkPassword("password");

    expect(response.result).toBeFalsy();
    expect(response.errors.length).toEqual(1);
    expect(response.errors[0]).toEqual("NoDigitError");
  });
});
