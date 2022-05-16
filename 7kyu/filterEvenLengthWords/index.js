/*
Title: filterEvenLengthWords
Description: Write a function called "filterEvenLengthWords".

Given an array of strings, "filterEvenLengthWords" returns an array containing only the elements of the given array whose length is an even number.

var output = filterEvenLengthWords(['word', 'words', 'word', 'words']);

console.log(output); // --> ['word', 'word']
*/

// Long Solution
// function filterEvenLengthWords(words) {
//   let filteredArr = [];
//   words.filter((x) => (x.length % 2 === 0 ? filteredArr.push(x) : 0));

//   return filteredArr;
// }

// Short solution
const filterEvenLengthWords = (words) => {
  return words.filter((x) => x.length % 2 === 0);
};
