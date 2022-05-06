/*
Title: Counting Array Elements
Description: Write a function that takes an array and counts the number of each unique element present.

Examples: 
count(['james', 'james', 'john']) 
#=> { 'james': 2, 'john': 1}
*/

const count = (array) =>
  array.reduce((sum, item) => {
    sum[item] = sum[item] ? sum[item] + 1 : 1;
    return sum;
  }, {});
