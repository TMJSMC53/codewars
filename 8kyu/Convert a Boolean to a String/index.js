/*
Title: Convert a Boolean to a String
Description: Implement a function which convert the given boolean value into its string representation.

Note: Only valid inputs will be given.
*/

// Long Solution
function booleanToString(b) {
  //your code here
  if (b === true) {
    let strTrue = b.toString("true");
    return strTrue;
  } else {
    let strFalse = b.toString("false");
    return strFalse;
  }
}
