/*
Title: Circular Objects #1 - Running around in circles
Description: Task
Define a circular object circular such that the following are true:

circular.value === "Hello World"
circular === circular.self
circular.self === circular.self.self

*/
let circular = {
  value: "Hello World",
};

circular.self = circular;
