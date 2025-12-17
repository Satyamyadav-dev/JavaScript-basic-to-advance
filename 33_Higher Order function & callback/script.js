
// function a is called as higher order function
function a(b){
    console.log(b);
}

// function Sayhi() {
//     console.log('Hiii');
// }

// called as callback function 
a(function () {
    console.log('Hiii');
})
// a(Sayhi)





// Higher Order function -> suppose we create a function when we call this function by passing the another function as argument then the function is called as higher order function. like here we created function a(b) , and we called this function by passing Sayhi()(in line 15) function as arguments a(Sayhi) then function a is called as higher order function.

// // Callback function -> when we pass direct function as argument , what function we passed is called as call-back function a(function () {
//     console.log('Hiii');
// })
