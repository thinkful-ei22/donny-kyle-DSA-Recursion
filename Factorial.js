'use strict';

// Write a recursive function that
//  finds the factorial of a given number.
//   The factorial of a number can be found by multiplying that number by each number between itself and one.
//    The factorial of 5 is equal to 5 * 4 * 3 * 2 * 1 = 120


//base case
// if number is 1 then return 1

//general
// number * number - 1


const factorialize = number =>{

  if(number === 1) return 1;

  return number * factorialize(number - 1);

};


console.log(factorialize(5));