'use strict';

// Write a function that reverses a string. Take a string as input, reverse the string, and return the new string.

// 'cool'
//base case
//empty string - return empty string
//general case
// 
// grab ool + c
//   grab ol + o

const reverseString = string => {
  //base case
  if (string.length === 0){
    return '';
  }

  return reverseString(string.slice(1)) + string[0];


};


console.log(reverseString('Kyle is cool'));
