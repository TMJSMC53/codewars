/*
Title: Hello Happy Codevarrior!
Description: VVhat ?!?

None of zese codevarriors seemz to remember hiz ovvn name !

Kould you help ?

var albert = new Warrior("Al")
var boris  = new Warrior("Boris")

albert.toString() --> "Hi! my name's Boris" <-- ohoh..
*/
class Warrior {
  constructor(newWarName) {
    this.newWarName = newWarName;
  }

  name(newName) {
    if (newName) {
      this.newWarName = newName;
    }
    return this.newWarName;
  }
}

Warrior.prototype.toString = function () {
  return "Hi! my name's " + this.newWarName;
};
