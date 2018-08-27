// Split a string based upon a separator (similar to String.prototype.split).

// INPUT: 'Hello world', separator = ' '
// OUTPUT: ['Hello', '']

// base case
// if (str.length === 0);
//   return '';

// recursive case
// check if separator
//   if not:
//     add char to end of last string in array ('' + 'w')
//   if separator:
//     ignore char & create new empty string in array


// VERSION 1
// const stringSplitter = (str, separator=' ', results=[]) => {
//   if (str.length === 0) {
//     return results;
//   }

//   let char = str[0];
//   console.log(char);
//   if (char === separator) {
//     results = [...results, ''];
//     console.log('separator found - results: ', results);
//     return [...results, stringSplitter(str.slice(1), separator, results)];
//   } else {
//     let newWord = results[results.length - 1] ? results[results.length - 1] + char : char;
//     results = [...results.slice(0, results.length - 1), newWord];
//     console.log('new char - results: ', results);
//     return stringSplitter(str.slice(1), separator, results);
//   }
// };

const stringSplitter = (string, separator = ' ') => {
  let sepIndex = string.indexOf(separator);
  console.log(sepIndex);
  console.log(string);
  // base case
  if (sepIndex === -1) {
    return string;
  }
  
  // recursive case
  return [ string.slice(0, sepIndex) ].concat(stringSplitter(string.slice(sepIndex + 1), separator));
};

// expected output: ['Hello', 'world']
console.log(stringSplitter('Hello world, how are you?'));