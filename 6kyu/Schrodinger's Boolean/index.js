/*
Title: Schrödinger's Boolean
Description: Can a value be both true and false?

Define omniBool so that it returns true for the following:

omniBool == true && omniBool == false
If you enjoyed this kata, be sure to check out my other katas.

*/
const omnibool = {
  value: true,
  [Symbol.toPrimitive]() {
    this.value = !this.value;
    return +!this.value;
  },
};
