/*
Title: Bin to Decimal
Description: Complete the function which converts a binary number (given as a string) to a decimal number.
*/

// Long solution
// function binToDec(bin) {
//   let decimal = 0;

//   for (let i = 0; i < bin.length; i++) {
//     decimal *= 2;
//     decimal += bin[i];
//   }

//   return decimal;
// }

// Short Solution
const binToDec = (bin) => parseInt(bin, 2);
