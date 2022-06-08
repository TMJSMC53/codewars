/*
Title: Exes and Ohs
Description: Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

Examples input/output:

XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false
*/

const XO = (str) => {
  let o = str.match(/o/gi);
  let x = str.match(/x/gi);

  return (o && o.length) === (x && x.length);
};
