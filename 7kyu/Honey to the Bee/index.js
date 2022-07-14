/*
Title: Honey to the Bee
Description: Find out why the amount of honey in the hive is not increasing.
*/
function Bee(capacity, hive) {
  this.capacity = capacity;
  this.hive = hive;
}

function Hive() {
  this.pollen = 100;
}

//TODO: The amount of honey in the hive is not increasing.
Hive.prototype.addPollen = function (pollen) {
  return (this.pollen += pollen);
};

Hive.prototype.getPollen = function () {
  return this.pollen;
};

Bee.prototype.unloadPollen = function () {
  return this.hive.addPollen(this.capacity);
};
