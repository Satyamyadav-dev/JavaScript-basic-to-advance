const evenNumber = [0, 2, 4, 6, 8]
evenNumber.shift()
evenNumber.unshift(0)
//1.shift() -> shift() method pop() method ka exact reverse h vo pichhe se elements ko remove karta h but shift aage se remove karta h par shift jab important ho tabhi use karna chahiye because js ko pure element ka index change karna padta h.
// 2.unshift() -> unshift(value) exact push ka reverse h push elements ko pichhe se add karta h but unshift() aage se .
//3.concat() -> join many arrays
const weather = ['hot', 'cold', 'mild', 'meadium']
const color = ['red', 'white', 'pink', 'violet', 'sky-blue', 'orange', 'yellow']
const result1 = weather.concat(color)
const result2 = color.concat(weather)
const result3 = color.concat(weather,evenNumber)

//4. indexof()-> indexof(value) element ka index return karta h par  aaray me jaisa element h vaisa exact daalne ka means capital to capital , small to small , if two same element is there at two different position then it will return the first matching element index, agr vo element nahi h to -1 return karega.
const elementIndex = weather.indexOf('cold')

//5.includes() -> includes(value) only tells provived element is exist in the array or not if exit the return true or else false
const isIncludes = evenNumber.includes(4)
const isIncludes1 = evenNumber.includes(10) 

//6.reverse() -> it reverse the original array 
const reverse1 = weather.reverse()

//7.sort() -> sort() method element ko alphabetically order  me sort karta h par jab saare element ya  to capital ho ya to smaal me ho, agr capital and small mix hoga to nahi kar payega abhi ke liye, par function se kar sakte h aur ha original aaray ko sort kar deta h  .

const  sortingOrder = color.sort()
//result : ['orange', 'pink', 'red', 'sky-blue', 'violet', 'white', 'yellow']

//8.slice() -> slice(?start, end?) it part of array of element its take start , end position of the element but it is optional jo end position h uske ek pahle tak ka element dega , ye original array ko nahi change karta h.

const slice1 = color.slice(2)
const slice2 = color.slice(3,5)

//9.splice() -> slice(?start, deletecount, ....items) it is used remove the element from the array it takes  start index , how  many items to be delete , on that place which items to be add , all this are optional it will change the original as well. 

const splice1 = color.splice(2)
color.splice(2, 2, 'satyam')  



//Homework 
let ages = [83, 26, 32, 13, 23, 3, 36, 28, 64, 48];

// Step 1: Add a person’s age at the end of the array. He is 19 years old.
ages.push(19); 
console.log("After adding 19:", ages);

// Step 2: Add another person’s age at the start of the array. She is 22 years old.
ages.unshift(22);
console.log("After adding 22 at the start:", ages);

// Step 3: Replace the age of the person at index 3 with 17.
ages[3] = 17;
console.log("After replacing index 3 with 17:", ages);

// Step 4: Sort the array in ascending order.
ages.sort((a, b) => a - b);
console.log("After sorting in ascending order:", ages);

// Step 5: Reverse the array (descending order).
ages.reverse();
console.log("After reversing to descending order:", ages);

// Step 6: Remove the oldest person (first element in descending order).
ages.pop();
console.log("After removing the oldest:", ages);

// Remove the youngest person (last element in descending order).
ages.shift(); 
console.log("After removing the youngest:", ages);

// Step 7: Check if 19 exists in the array and find its index.
if (ages.includes(19)) {
    console.log("19 exists at index:", ages.indexOf(19)); // Corrected to indexOf
} else {
    console.log("19 does not exist in the array.");
}
