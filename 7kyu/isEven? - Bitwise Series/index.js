/*
Title: isEven? - Bitwise Series
Description: Is the number even?
If the numbers is even return true. If it's odd, return false.
*/

const isEven = (n) => {
  return Math.floor(n / 2) * 2 === n ? true : false;
};
