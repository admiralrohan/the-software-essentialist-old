function isValidPassword(password: string): {
  result: boolean;
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

  return { result: isValid, errors: [] };
}

export default isValidPassword;
