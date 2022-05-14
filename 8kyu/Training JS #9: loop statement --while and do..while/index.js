/*
Title: Training JS #9: loop statement --while and do..while
Description: Task
Coding in function padIt, function accept 2 parameters:

str, it's a string representing the string to pad, we need pad some "*" at leftside or rightside of str
n, it's a number, how many times to pad the string.
Behaviour
You need to write a loop statement within the function that loops n times. Each time through the loop it will add one * to str, alternating on which side it is padded: the first time will add a * to the left side of str, the second time will add a * to the right side, and so on.

Finally, return the padded string.

*/
function padIt(str, n) {
  let res = str;
  let i = 0;

  do {
    if (i % 2 === 0) {
      res = `*${res}`;
    } else {
      res = `${res}*`;
    }

    i++;
  } while (i < n);
  return res;
}

console.log(padIt("a", 2));
console.log(padIt("a", 5));
