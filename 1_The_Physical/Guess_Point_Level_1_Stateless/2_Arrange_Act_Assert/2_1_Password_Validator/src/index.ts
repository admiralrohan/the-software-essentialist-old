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

  return { isValid, errors: [] };
}

export default isValidPassword;
