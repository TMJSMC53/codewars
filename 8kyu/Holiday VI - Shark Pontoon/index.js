/*
Title: Holiday VI - Shark Pontoon

Description:
You need to work out if the shark will get to you before you can get to the pontoon. To make it easier... as you do the mental calculations in the water you either freeze when you realise you are dead, or swim when you realise you can make it!

You are given 5 variables;

sharkDistance = distance from the shark to the pontoon. The shark will eat you if it reaches you before you escape to the pontoon.

sharkSpeed = how fast it can move in metres/second.

pontoonDistance = how far you need to swim to safety in metres.

youSpeed = how fast you can swim in metres/second.

dolphin = a boolean, if true, you can half the swimming speed of the shark as the dolphin will attack it.

The pontoon, you, and the shark are all aligned in one dimension.

If you make it, return "Alive!", if not, return "Shark Bait!".

Note: it's important to pay attention to the details.

*/

// Long Solution
function shark(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin) {
  sharkSpeed = dolphin ? sharkSpeed / 2 : sharkSpeed;

  return sharkDistance / sharkSpeed < pontoonDistance / youSpeed
    ? "Shark Bait!"
    : "Alive!";
}
