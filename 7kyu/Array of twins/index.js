/*
Title: Array of twins
Description: You are given an array of numbers. Check if the array contains of pairs, i.e every number occurs exactly two times. If true, return true, otherwise false. Your solution should not modify the input array.
*/

const twins = (myArray) => {
  return myArray.every(
    (item) => myArray.filter((x) => x === item).length === 2
  );
};
