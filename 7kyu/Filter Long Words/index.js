/*
Title: Filter Long Words
Description: Write a function that takes a string and an an integer n as parameters and returns a list of all words that are longer than n.

Example:

* With input "The quick brown fox jumps over the lazy dog", 4
* Return ['quick', 'brown', 'jumps']
*/

// Long Solution
function filterLongWords(sentence, a) {
  return sentence.split(" ").filter((word) => word.length > a);
}

// Refactor
const filterLongWords = (sentence, a) => {
  return sentence.split(" ").filter((word) => word.length > a);
};
