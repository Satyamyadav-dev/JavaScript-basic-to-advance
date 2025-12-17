

sayHi()

const username = 'Anurag'
const userAge = 25

function sayHi() {
    const a = 14
    const b = 12
    add(7, 9)                // call to add function
}

function add(x, y) {
    kuchhBhi()             // call to kuchhBhi function
    return x + y
}

function kuchhBhi() {
    console.log('Kuchh bhi');
}

console.log('Program Ended');

function introduceMe (){
    console.log('my name is satyam');
        
introduceMe()             // calling itself to call stack point nahi karega .
}
   


// Call Stack -> call stack same apna stack data-structure h jo line currently javascript engine run karega usko point karta . in case of function ko jab hum call karte h tab vo jaise-jaise call ho raha vaise-vaise usko stack me put karta jata h same last-in-first-out (LIFO) datastructure ke form me .