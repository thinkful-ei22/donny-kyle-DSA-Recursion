'use strict';

// Write a recursive function that prints the fibonacci sequence of a given number. 
// The fibonnaci sequence a series of numbers in which each number is the sum of the two preceding numbers.
// For example the 7th fibonacci number in a fibonaci sequence is 13.
// The sequence looks as follows: 1 1 2 3 5 8 13.

//sequence in which number is the sum of the two preceding numebrs e.g.


//for fib 1 = 0 + 1 = 1 
//for fib 2 = 0 + 1 = 1
//for fib 3 = 1 + 1 = 2
//for fib 4 = 2 + 1 = 3
//etc


// input: 7
// output:  13

//base case
//if input number is zero, return zero
//general case
// for a given fibonaci number the value is equal to  Fibonucci(number -2) + Fibonicci(number - 1)


const fiboNum = num => {
 
 
 

  if(num === 0){
    return 0;
  }

  if(num === 1){
    return 1;
  }

  return fiboNum(num -2) + fiboNum(num-1);



};


console.log(fiboNum(7));



//