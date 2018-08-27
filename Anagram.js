
// An anagram is any word or phrase that exactly reproduces 
// the letters in another order. Write a function that creates 
// an anagram (listing all the rearrangements of a word) of a 
// given word. For example, if the user types east, the program 
// should list all 24 permutations, including eats, etas, teas, 
// and non-words like tsae.

// Hint: For your algorithm, you might want to think about a prefix 
// and use that to create the new words. For example, given east, 
// use e as a prefix and you would place e in front of all six 
// permutations of ast — ast, ats, sat, sta, tas, and tsa. This will 
// give you the words east, eats, esat, esta, etas, and etsa. Continue 
// this way until you find all the anagrams for east. There should 
// be 24 of them.

// take prefix + add all combinations (all remaining letters)
// E -> ast, ats, sat, sta, tas, tsa
// e, a, s, t
// ea, es, et, ae, as, at, se, sa, st, te, ta, ts
// eas, eat, esa, est, eta, ets, aes, aet, ase, ast, ate, ats, ...
// east, eats, esat, esta, etas, etsa


//base case
//if string is 1 letter long stop
// prefix - all the possible variations that could possibly be made up

const anagram = (word) => {
  const results = {};

  const looper = (prefix, string) => {
    if (!string) {
      results[prefix] = '';
    }
    string.split('').forEach((letter, index) => {
      looper(prefix + letter, string.slice(0, index) + string.slice(index + 1));
    });
  };
  looper('', word);
  return Object.keys(results);
};

const answer = anagram('east');
console.log(answer, answer.length);