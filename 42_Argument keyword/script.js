/* In JavaScript, the arguments keyword is an array-like object that is available within all non-arrow(normal function) functions. It contains all the arguments passed to the function, regardless of how many are specified in the function's parameter list. It allows you to work with arguments dynamically. */

function add (){
    let sum = 0
    for(let i=0; i< arguments.length; i++){
        sum = sum + arguments[i]
    }


}