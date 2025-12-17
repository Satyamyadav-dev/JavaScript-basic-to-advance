const evennum = [0, 1, 2, 3 , 4, 5, 6]

// const result = evennum.some((num, i)=>{
//     if ( num % 2 == 1){                   // if odd exist print their index
//         console.log(i);
//     }
    
// })

// const arr = [57, 67, 58, 59, 39, 78]

// const haslessThan50 = arr.some((num)=>{     // {} scope lagaya to return key likhna padega yaad h na.
//      return num < 50
// })

// console.log(haslessThan50);

//.some() -> .some() method check karta h array me ki jo bhi condition pass vo exist h ki nahi iska output boolean(true/false) me aata . aur ha isko pure array me kahi bas ek baar 'true' mil jayega aage check nahi karega vo pure array ke answer ko true manega. aur false ke case me pure array ke element ko check karega agr sab false h to false return karega. .every() me same reverse h.
// syntaax -> arrayname.some(element, index, array) same parameter fix h jaise .map() and .filter() me tha .
// element (required): The current element being processed.
//index (optional): The index of the current element.
//array (optional): The array .some() was called on.

// .every() -> agr isme ek bhi false mila to sabko false samjhar false return karta . par true ke case me saare element ko check karega agar condition true huaa to hi true return karega.

const onlyEvenNum = [0, 10, 20, 24, 36, 50]
 
const resultOfEven = onlyEvenNum.every((num)=>{
return console.log(num % 2 == 0); 
}) 

// 0 % 2 == 0 h to pahle hi condition false ho gya to aage check hi nahi karega.

const includeOdd = [1, 5, 3, 62, 57]

const oddResult = includeOdd.every((odd)=> odd % 2 == 1)
    
    