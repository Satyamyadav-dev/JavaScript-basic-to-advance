// 1. for...of Loop
// The for...of loop is used to iterate over the values of an iterable object like arrays, strings, or other iterable collections.

// Example (iterating over an array)

const fruits = ['apple', 'banana', 'orange'];

for (const fruit of fruits) {
  console.log(fruit);
}
// Output:
// apple
// banana
// orange

// Example (iterating over a string):

const name = "John";

for (const letter of name) {
  console.log(letter);
}
// Output:
// J
// o
// h
// n

// 2.for...in Loop
// The for...in loop is used to iterate over the keys (or indices) of an object or array.

// Example (iterating over the keys of an object):

const person = {
    name: 'Alice',
    age: 30,
    job: 'Engineer'
  };
  
  for (const key in person) {
    console.log(key + ": " + person[key]);
  }
  // Output:
  // name: Alice
  // age: 30
  // job: Engineer


//   Example (iterating over the indices of an array):
const numbers = [10, 20, 30];

for (const index in numbers) {
  console.log(index + ": " + numbers[index]);
}
// Output:
// 0: 10
// 1: 20
// 2: 30

// Key Differences:
// for...of is for iterating over the values of iterable objects like arrays or strings.
// for...in is for iterating over the keys (or indices) of an object or array.
