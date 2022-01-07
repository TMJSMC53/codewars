/*
Title: Convert a string to an array

Description: Write a function to split a string and convert it into an array of words.

Examples (Input -> Output):
* "Robin Singh" ==> ["Robin", "Singh"]

* "I love arrays they are my favorite" ==> ["I", "love", "arrays", "they", "are", "my", "favorite"]
*/

// Long Solution
// function stringToArray(string) {
//   // code code code
//     let splitted = string.split(" ")
//     return splitted
// }

// Short Solution
function stringToArray(string) {
  return string.split(" ");
}
