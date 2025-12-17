// remainder operator
let remainder = 26 % 3
console.log(remainder);
// exponential operator
let expo = 2 ** 3
console.log(expo);

// Mathsqrt():- it is used to find sqrt of number which pass into bracket.
let sqrt = Math.sqrt(16)
console.log(sqrt);
// Math.pow():- it is used to find power of number which pass into bracket , new version is exponential operator.
let power = Math.pow(2,6)
console.log(power);

// Math.floor():- it gives only integer number agr decimal me deta hu to bhi decimal ko hta ke integer ko hi consider karega .
let number1 = Math.floor(2.94524)
let number2 = Math.floor(3.99999999999999999999999999999999999999999999999)
let number3 = Math.floor(-4.3555)  //ek step pichhe lata (-4.265) to -3 kar dega.

// Math.ceil():- ceil ek step number ko upar leke jata h jaise chhat ka ek step upar jaise hi number ko ek step bda ke deta h , integer me h to thik h integer hi dega baki point keliye aisa dega.
let firstNumber = Math.ceil(5.99)
let secondNumber = Math.ceil(-3.555)
// Math.round():- ye number ko approximate karke deta normal hum jaisa maths me karte h.
let approx1 = Math.round(5.45)
let approx2 = Math.round(5.55545685)

// Math.random():- ye method random number generate karta h between 0 and 1 agar range nahi diya to where 0 is included and 1 is excluded most usable method h. 
let random = Math.random()
let random1 = Math.floor(Math.random() * 20) // 0 to 20 ke between dega including 0 also point me deta par abhi floor dega because i written inside Math.floor()

let randomArbitary = Math. random() * (20 - 10) + 10 // it is generate random number between 10 to 20 only, see formula from google.


//infinity
console.log(8/0); 
console.log(0/0); // NaN (not a number)


//calculate are of recangle fron user input

// let width = prompt('enter the width:')
// let height = prompt('enter height:')
// let area = console.log((+width * +height));
// document.write(`the area of recangle is:${+width * +height}`)
 