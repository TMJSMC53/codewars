/*
Title: Failed Sort - Bug Fixing #4
Description: Failed Sort - Bug Fixing #4
Oh no, Timmy's Sort doesn't seem to be working? Your task is to fix the sortArray function to sort all numbers in ascending order
*/
const sortArray = (value) =>
  value
    .split("")
    .sort((c, p) => c - p)
    .join("");
