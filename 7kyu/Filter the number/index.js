/*
Title: Filter the number
Description: Filter the number
Oh, no! The number has been mixed up with the text. Your goal is to retrieve the number from the text, can you return the number back to its original state?

Task
Your task is to return a number from a string.

Details
You will be given a string of numbers and letters mixed up, you have to return all the numbers in that string in the order they occur.
*/
// Long Solution
// var FilterString = function (value) {
//   const filtered = value.replace(/^[0-9]/g, "");

//   let num;

//   if (filtered !== null) {
//     num = +filtered;
//   }

//   return num;
// };

// Short Solution
const filterString = (value) => {
  return +value.replace(/\D/g, "");
};
