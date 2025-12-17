
const Timer1 = setTimeout(`console.log('Hello 1')`, 1000) // isko 1sec me print karega
const Timer2 = setTimeout(`console.log('Hello 2')`, 2000) //  isko 2sec me print karega
const Timer3 = setTimeout(`console.log('Hello 3')`, 4000)  //  isko 4sec me print karega par ab nahi karega kyu clearTimeout(Timer3)

clearTimeout(Timer3) // ye print hone se rok deta h 

const funTime = setTimeout(a, 3000) // it is higher order function inside setTimeout() imp note: here the function don't add parenthesis() only give the name of variable.

function a(){
    console.log('Hello World');
}


const intervalTimer = setInterval(a, 5000, 'intervaltimer')
clearInterval(intervalTimer)


//SetTimeout -> The setTimeout() method of the Window interface sets a timer which executes a function or specified piece of code once the timer expires.
// cleartimeout -> print hone se rokta h.
// setinterval -> same settimeout ke jaisa kaam karta h.
// clearinterval -> same cleartimeout ki tarah kaam karta h.