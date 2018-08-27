
// sum of the n natural numbers from 1 to n.
// This is the Triangular Number Sequence: 1, 3, 6, 10, 15, 21, 28, 36, 45

// base case
// if num === 1 return 1;

// recursive case
// num + result(num-1)

const triangularNumber = num => {
  if (num === 1) {
    return 1;
  }
  return num + triangularNumber(num - 1);
};

console.log(triangularNumber(4));