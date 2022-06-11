/*
Title: Find the capitals
Description: Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.

Example
Test.assertSimilar( capitals('CodEWaRs'), [0,3,4,6] );

*/
// const capitals = (word) => {
//   let arr = [];

//   for (let i = 0; i < word.length; i++) {
//     if (word[i].match(/[A-Z]/g) !== null) {
//       arr.push(i);
//     }
//   }

//   return arr;
// };

// Without Regex
const capitals = (word) => {
  let arr = [];

  for (let i = 0; i < word.length; i++) {
    if (word[i].toUpperCase() === word[i]) arr.push(i);
  }

  return arr;
};
