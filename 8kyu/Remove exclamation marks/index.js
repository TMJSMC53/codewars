/*
Title: Remove exclamation marks
Description: Write function RemoveExclamationMarks which removes all exclamation marks from a given string.
*/
// With Regex
function removeExclamationMarks(s) {
  return s.replace(/!/g, "");
}

// Without Regex
function removeExclamationMarks(s) {
  return s.split("!").join("");
}
