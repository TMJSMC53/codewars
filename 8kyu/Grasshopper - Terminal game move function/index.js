/*
Title: Terminal game move function
In this game, the hero moves from left to right. The player rolls the dice and moves the number of spaces indicated by the dice two times.

Description: Create a function for the terminal game that takes the current position of the hero and the roll (1-6) and return the new position.

Example:
move(3, 6) should equal 15
*/
function move(position, roll) {
  // return the new position
  //   Player starts at a given position & moves twice the value of the dice roll.

  // Calculate the final position.
  return position + roll * 2;
}
