// we alredy learned to create function by two method

//1. function declaration 

// function square(num){
//     return num*num
// }

//2. function expression

// const square = function(num){
//     return num*num
// }

//3. arrow function 

const square = (num) => {
    return num*num
}

//4. add function
//  const add = (a, b) => {
//     return a+b 
//  }

 const add1 = (a, b) => a+b  // agar sirf ek line ko return karwana h to aisa likh sakte h .

// setTimeout(() => {                       // arrow function without parameter

//     console.log('Hiiii');
    
// }, 2000)





// difference and reason between traditional function vs arrow function must read properly*************************

//he syntax you provided:

// javascript
// Copy code
// function add(a, b) => {

// }
// is invalid because arrow functions in JavaScript have a distinct syntax and cannot be combined with the function keyword. Let me break it down for you:

// Correct Syntax for Arrow Functions
// Arrow functions are defined using the => operator and do not use the function keyword. The correct syntax is:


// const add = (a, b) => {
//   // function body
// };
// Or, for a concise one-liner:

// javascript
// Copy code
// const add = (a, b) => a + b;
// Why function and => Don't Mix
// function Keyword Syntax: The function keyword introduces a traditional function declaration or expression, which has its own syntax:

// javascript
// Copy code
// function add(a, b) {
//   // function body
// }
// You cannot append => to a function declaration.

// Arrow Function Syntax: Arrow functions are syntactic sugar introduced in ES6 (ECMAScript 2015) for creating anonymous functions, without the need for the function keyword:

// javascript
// Copy code
// (a, b) => {
//   // function body
// };
// If assigning an arrow function to a variable, you use an assignment operator =:

// javascript
// Copy code
// const add = (a, b) => a + b;
// Differences Between Arrow Functions and Regular Functions
// this Context:

// Regular functions have their own this context.
// Arrow functions inherit this from their enclosing scope.
// Syntax and Readability:

// Arrow functions are shorter and cleaner, especially for one-liners.
// Regular functions are more verbose and suitable when this manipulation is needed.
// If you aim to write an arrow function, drop the function keyword:

// javascript
// Copy code
// // Traditional function
// function add(a, b) {
//   return a + b;
// }

// // Arrow function
// const add = (a, b) => a + b;


// https://chatgpt.com/share/67696595-0ef4-8004-bd03-148308d48225 nahi to ye gpt ka link chrome par paste kar yahi same baate h with clearity 


