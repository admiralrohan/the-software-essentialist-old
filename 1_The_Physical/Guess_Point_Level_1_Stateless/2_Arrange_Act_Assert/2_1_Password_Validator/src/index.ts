function isValidPassword(password: string): {
  isValid: boolean;
  errors: string[];
} {
  // Default states
  let isValid = true;
  const errors = [];

  // Error handling
  if (password.length < 5) {
    isValid = false;
    errors.push("Less than 5 characters");
  }
  if (password.length > 15) {
    isValid = false;
    errors.push("More than 15 characters");
  }
  if (!Boolean(password.match(/\d+/))) {
    isValid = false;
    errors.push("Less than 1 digit");
  }
  if (!Boolean(password.match(/A-Z/))) {
    isValid = false;
    errors.push("Less than 1 uppercase letter");
  }

  return { isValid, errors };
}

export default isValidPassword;
