/*
Title: Sorting Arrays
Description: Given two arrays, a1 and a2, sort the elements of a2 based on the the index of the word in a1 that begins with the same letter.

Example 1
var a1 = ['giraffe', 'orangutan', 'impala', 'elephant', 'rhino'];
var a2 = ['rattlesnake', 'eagle', 'geko', 'iguana', 'octopus'];

returns ['geko', 'octopus', 'iguana', 'eagle', 'rattlesnake']
Example 2
var a1 = ['jellyfish', 'koi', 'caribou', 'owl', 'dolphin'];
var a2 = ['ostrich', 'jaguar', 'deer', 'camel', 'kangaroo'];

returns ['jaguar', 'kangaroo', 'camel', 'ostrich', 'deer']
Each element in the arrays will start with a unique letter so there will only be a single match for each element.
*/
function sortArray(a1, a2) {
  return a1.map((el) => a2.find((word) => el[0] === word[0]));
}
