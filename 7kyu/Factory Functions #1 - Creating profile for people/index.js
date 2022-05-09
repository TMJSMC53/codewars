/*
Title: Factory Functions #1 - Creating profile for people
Task
Description: Define a factory function person (yes, all lowercase letters) which accepts the following parameters in the following order:

firstName
lastName
age
gender
employed
occupation
married
The names of the object's keys should be identical to the names of the parameters mentioned above.

The object should (then) also have the following methods:

sayName - this should return the full name of the person (e.g. {firstName: "John", lastName: "Doe"} => "John Doe" // when the sayName() method is called)
introduce - this should return a string of the following format: "Hello, my name is FULL_NAME. I am AGE years old. I am a GENDER."
IMPORTANT: For the introduce() method of the person, each sentence is separated from the next by exactly TWO whitespace characters.

In the next Kata of this series, we will be investigating how "inheritance" / object composition is done through factory functions.

*/
function person(
  firstName,
  lastName,
  age,
  gender,
  employed,
  occupation,
  married
) {
  // Program your factory function here :)
  return {
    firstName,
    lastName,
    age,
    gender,
    employed,
    occupation,
    married,

    sayName() {
      return `${this.firstName} ${this.lastName}`;
    },

    introduce() {
      return `Hello, my name is ${
        this.firstName + " " + this.lastName
      }.  I am ${this.age} years old.  I am a ${this.gender}.`;
    },
  };
}
