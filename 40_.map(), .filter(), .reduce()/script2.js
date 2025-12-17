// open this link and understand the working of reduce it is very simole explanation https://chatgpt.com/share/676a903f-a880-8004-9157-a133489efb3c



// Got it! Here's the explanation you provided, formatted as requested:

// What is reduce()?
// The reduce() method is a function in JavaScript that allows you to reduce an array to a single value by applying a callback function to each element in the array.

// Think of it like a way to process every element in the array and combine them into one result, like summing up numbers, multiplying them, or finding the maximum value.

// Syntax of reduce()

// array.reduce((accumulator, currentValue, index, array) => {
//     // your logic here
// }, initialValue);

// accumulator: This is the value that you accumulate as the reduce() method loops through the array. It starts as the initialValue (if provided).
// currentValue: This is the current item in the array that reduce() is processing.
// index (optional): The index of the current item (not used often).
// array (optional): The array that reduce() is working on.
// The initialValue is optional but helps avoid issues when the array is empty.
console.log('---------reduce');

// debugger
const nums =[1,2,3,4]

const sum = nums.reduce((accumulator, currentvalue)=>{
    // console.log(accumular, currentvalue);
    return accumulator + currentvalue
},0)



// working pprocss -> accumulator initial value lega means 0 jo maine pass kiya h and cuurentvalue array ke element ko leta h one by one .
// step1 : accumulator(0) + currentvalue(1) result 1 ab accumulator update hoga 1
// step2 : accumulator(1) + currentvalue(2) result 3 ab accumulator update hoga 3
//step3 : accumulator(3) + currentvalue(3) result 6 ab accumulator update hoga 6
// step4 : accumulator(6) + currentvalue(4) result 10 ab accumulator update hoga 10
// step : come out because currenvalue end.

// ye behind the scene loop ki tarah kaam karta h debugger se check bhi kar sakta h .