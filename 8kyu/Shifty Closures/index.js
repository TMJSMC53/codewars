/*
Title: Shifty Closures
Description: 
*/
let clientName;
const greet_abe = () => {
  clientName = "Abe";
  return `Hello, ${clientName}!`;
};

const greet_ben = () => {
  clientName = "Ben";
  return `Hello, ${clientName}!`;
};
