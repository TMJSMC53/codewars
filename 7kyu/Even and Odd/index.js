/*
Title: Even and Odd
Description: Given a number N, can you fabricate the two numbers NE and NO such that NE is formed by even digits of N and NO is formed by odd digits of N? Examples:

input	NE	NO
126453	264	153
3012	2	31
4628	4628	0
0 is considered as an even number.

*/
function evenAndOdd(num) {
  // your code here
  let arrNums = ["", ""];

  num
    .toString()
    .split("")
    .map((x) => (x % 2 === 0 ? (arrNums[0] += x) : (arrNums[1] += x)));

  return arrNums.map((x) => (x === "" ? 0 : x * 1));
}
