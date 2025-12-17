// debugger

console.log('Hi-1');
function hello() {
    console.log('Hello World');
}

hello()

setTimeout(hello, 1000)
setTimeout(hello, 2000)
setTimeout(function () {            // this is called as anonymous function  
    console.log('Helo!!!!!!!!!!');
})

for (i = 0; i <= 4; i++) {
    console.log(i);
}

function add() {    // closure in javascript 36 folder tha jo isme hi daal diya ok
    const a = 5
    const b = 6
    function sub() {
        console.log(a + b);

    }
    sub()
}
add()


// Callback Queue -> apna normal datastructure wala queue h FIFO par kaam karta h. actually dekh hota kya h na ki jabhi bhi hum settimeout ka use karte aur usko ek time set karte h to javascript usko ek alag engine me daalta h usko WEBAPIs handle karta taki js ideal n rahe utn etime ke liye, tab tak js baki synchronous code ko execute karta h.
// ab image dekh isme settimeout wala line vo WebApis me jata h, tab tak js baki code execute karta h . phir jaise- jaise sabka time expires hota h vo ek-ek karke callback queue me jaate h aur call-stack and callback queue ke bichh me loop h usko hi 'Event loop' bolte h iska kaam ye rahta h ki. ye check karta agar koi function callback-queue me h to usko  callstack ko dena .

// 1.jo code callstack ke andar nahi jaata h usko Asynchronous code bolte uska abhi jaise expalain kiya upar vaisa hota h . matlab pahle vo webapis me jaata h phie callbackqueue se callstack me jata h .
// 2. jo code callstack me direct jaata h usko synchronous code bolte h.