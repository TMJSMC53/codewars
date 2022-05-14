/*
Title: Fuel Calculator
Description: In this kata you will have to write a function that takes litres and pricePerLitre (in dollar) as arguments.

Purchases of 2 or more litres get a discount of 5 cents per litre, purchases of 4 or more litres get a discount of 10 cents per litre, and so on every two litres, up to a maximum discount of 25 cents per litre. But total discount per litre cannot be more than 25 cents. Return the total cost rounded to 2 decimal places. Also you can guess that there will not be negative or non-numeric inputs.

Good Luck!

*/
function fuelPrice(litres, pricePerLitre) {
  let maxDiscount = 0;

  if (litres >= 2) maxDiscount = 0.05;
  if (litres >= 4) maxDiscount = 0.1;
  if (litres >= 6) maxDiscount = 0.15;
  if (litres >= 8) maxDiscount = 0.2;
  if (litres >= 10) maxDiscount = 0.25;

  let total = litres * pricePerLitre - litres * maxDiscount;
  return +total.toFixed(2);
}
