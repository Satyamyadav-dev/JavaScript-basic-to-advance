const colors = ['orange', 'Blue', 'Violet','White', 'Yellow']

// tranditional way to access array
// const color1 = colors[0]
// const color2 = colors[1]
// const color3 = colors[2]

//Destructuring -> Destructuring ka use se ek bar me  variable and value ko declare and access kar sakte h.isme  array ko create karte h left side me achha isko array mat samjhana  kyu ki hum  array to equal to(=) ke right side me create karte h.samjhate h  [color1, color2, color3] = colors ,iska kya right me jo 'colors' vo ye bta raha h ki colors name se koi array h vha se value access karna h. [color1, color2, color3] jo color1 h uska matlab h ki colors array ke index0 par jo element h usko color1 me daal do matlab ye variable aur access dono ka kaam kar raha h. similary for others also

const [color1, color2, color3] = colors //commoly used isme varible name kuchh de sakte h vo serial wise hi uthata h
// console.log(color4);

// to access direct in between any element

const [,,, color4] = colors  // ,,, means except starting three color leave karke access color4 directly
const [{4: color5}] = colors // means 4 index par ka color ko color5 ke variable me daal do ,[{}] isliye laga kyu array bhi behind the scene ek object hi h we know that.

const userDetails ={
    userName : 'Satyam',
    userAge: 20,
    address:{
        city: 'Bangaluru',
        State : 'Karnatka'

    }
}

// const username = userDetails.userName
// const city = userDetails.address.city

// Destructuring

// const {userName, userAge} = userDetails  // kahani vahi same h yaha but variable bhi vahi create karna jo key object me ho as key array ke jaisa kuchh nahi kyu ye vo key dekhta h object h ki nahi , agr nahi ti 'undefined' deta h ye most of the time use karte h .

// lekin mai chahta hu alag variable me store ho 

// const {userName: name, userAge: age } = userDetails // ye userName ke key me jo bhi value hoga name me daal dega .

// to access city 

// const {address : {city}} = userDetails 

// use destructuring in function 

function intro({userName, userAge}){  // pass pura object hi kar rahe but userName and userAge ko access kar rahe h
    console.log(userName, userAge);
}

intro(userDetails)  

// same for array also 
function printcolor([a, b]){
    console.log(a,b);
}
printcolor(colors)





