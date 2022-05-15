/*
Title: One Line: Even Check
Description: Create a function that accepts a number n as a parameter and returns true if the number is even and false if the number is odd.

Notes:
```javascript 1 <= n <= 1000 ``` The length of your code must be less than or equal to 19 characters.
You are not allowed to use %.

*/
// Long Solution
// const evenCheck = (n) => (Math.floor(n / 2) * 2 === n ? true : false);

// Short Solution
evenCheck = (n) => !(n & 1);
// console.log(evenCheck(5));
// console.log(evenCheck(8));
// console.log(evenCheck(7));
// console.log(evenCheck(100));
