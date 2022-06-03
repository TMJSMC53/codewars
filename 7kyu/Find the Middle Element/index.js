/*
Title: Find the Middle Element
Description: 

*/

function gimme(triplet) {
  let sorted = [...triplet].sort((a, b) => a - b);
  return triplet.indexOf(sorted[1]);
}
