/*
Title: Classy Extentions
Description: Task
Your task is to complete the Cat class which Extends Animal and replace the speak method to return the cats name + meows. e.g. 'Mr Whiskers meows.'

*/
class Cat extends Animal {
  speak() {
    return `${this.name} meows.`;
  }
}
