/*
Title: Regex Password Validation
Description: You need to write regex that will validate a password to make sure it meets the following criteria:

At least six characters long
contains a lowercase letter
contains an uppercase letter
contains a number

Valid passwords will only be alphanumeric characters.
*/

const validate = (password) => {
  let lowCase = password.match(/[a-z]/);
  let upCase = password.match(/[A-Z]/);
  let numValid = password.match(/[0-9]/);
  let passWordLength = password.length > 5;

  if (password.replace(/[A-Z0-9]/gi, "").length > 0) return false;

  return lowCase && upCase && numValid && passWordLength;
};
