const userName = true ? 'true hoga to' : 'false hoga to'

const a = 5>13 ? 'yes' : 'no'

// ? ke pahle kuchh bhi ecpresion daalna hota to pahle javascript usko true,false convert karega phir agar true aaya to first wala return hoga else second.

// javascript falsy value 
// 0,-0,null,'',undefined,NaN. ye falsy value ke liye second value return hoga . matlab false huaa to second value aayega agar true h to first value.

const gender = 'f'
console.log(`${gender.toLowerCase() === 'f'? 'she' : 'he'} is college student`)

// ternary operator how works syntax is condition? 'true': 'false' . means check before ? wether the expression is true or false if it's true always return first value else second .

// chainig in javascript 

const b = 12 > 53 ? 'true' : 'false' ? 'Hi': 'hello'

// pahle  12 > 53 ? 'true' : 'false' itne part ko ek expression cansider karke answer matlab false answer aayega , now ab 'true' : 'false' ? 'Hi': 'hello' itne ko consider karega pahle true mila to 'Hi' aayega . chainin rule vaise to 99% use nahi hota h .
 