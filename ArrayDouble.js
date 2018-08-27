'use strict';
// Array Double
// Write a function that takes an array as input which contains an unknown set of numbers, and outputs an array with each input value doubled. Test your solution by trying a handful of different arrays. For example,

// Input: [1, 2, 3]
// Output: [2, 4, 6]


//base case 
// empty array return []
//general case
// first element in array * 2
// return [new Array, ...function(array.slice(1))]


const arrayDoubler = array => {
  //base case
  if(array.length === 0){
    return [];
  }

  //general case
  const newArray = array[0] * 2;
  return [newArray, ...arrayDoubler(array.slice(1))];

};


console.log(arrayDoubler([1.2323,5.66,6.66]));
