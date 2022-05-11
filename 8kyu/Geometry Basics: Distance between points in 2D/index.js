/*
Title: Geometry Basics: Distance between points in 2D
Description: This series of katas will introduce you to basics of doing geometry with computers.

Point objects have x and y attributes (X and Y in C#) attributes.

Write a function calculating distance between Point a and Point b.

Tests round answers to 6 decimal places.
*/
function distanceBetweenPoints(a, b) {
  // your code here
  return Math.hypot(a.x - b.x, a.y - b.y);
}

const distanceBetweenPoints = (a, b) => Math.hypot(a.x - b.x, a.y - b.y);
