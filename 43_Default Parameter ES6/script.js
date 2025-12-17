function multiply(a, b=1){
    return a*b
}

// agar koi user multiply(5, 6) to apne ko pta h 5 is assign to 'a' and 6 is assign to 'b' . suppose multiply(5) aisa pass kiya to a=5 hoga by ke place par bydefault 1 jayega isliye to isko default parameter bollte. accha ye undefined(jab kuchh nahi pass kiya) value ko handle karta h ,falsy value ko nahi karta 
multiply(5, 6)
multiply(5,undefined)
multiply(5,null)


// this function gives number between what user give numberofsides other it takes default=6

// function rollADice(numberofsides = 6){
//     return Math.floor(Math.random() * numberofsides) + 1
// }

// old version 
function rollADice(numberofsides){
    if(numberofsides === undefined){
        numberofsides = 6
    }
    return Math.floor(Math.random() * numberofsides) + 1
}
