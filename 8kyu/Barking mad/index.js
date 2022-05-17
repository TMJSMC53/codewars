/*
Title: Barking mad
Description: Teach snoopy and scooby doo how to bark using object methods. Currently only snoopy can bark and not scooby doo.

Examples: 
snoopy.bark(); // return "Woof"
scoobydoo.bark(); // undefined
Use method prototypes to enable all Dogs to bark.
*/
class Dog {
  constructor(breed) {
    this.breed = breed;
  }

  bark() {
    return "Woof";
  }
}

let snoopy = new Dog("Beagle");

let scoobydoo = new Dog("Great Dane");
