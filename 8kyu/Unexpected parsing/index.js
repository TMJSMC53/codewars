/*
Title: Unexpected parsing
Description: Function should return a dictionary/Object/Hash with "status" as a key, whose value can : "busy" or "available" depending on the truth value of the argument is_busy.

But as you will see after clicking RUN or ATTEMPT this code has several bugs, please fix them.

*/
// Long Solution
function getStatus(isBusy) {
  var msg = isBusy ? "busy" : "available";
  return {
    status: msg,
  };
}

// Short Solution
const getStatus = (isBusy) => ({ status: isBusy ? "busy" : "available" });
