/*
Title: Lario and Muigi Pipe Problem
Description: 
*/

function pipeFix(numbers) {
  let first = numbers[0];
  let last = numbers[numbers.length - 1];

  let arrResult = [];

  for (let i = first; i <= last; i++) {
    arrResult.push(i);
  }

  return arrResult;
}

// console.log(pipeFix([1, 2, 3, 5, 6, 8, 9]));
// console.log(pipeFix([1, 2, 3, 7]));
