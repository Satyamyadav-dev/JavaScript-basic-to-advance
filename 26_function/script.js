// function is reusable pieace of code 

// function defition 
function introduceMe(username , Degree, age) {

    console.log('Hi');
    console.log(`My name is ${username || 'procodrr'} `);
    console.log(`I am a ${Degree}`);
    console.log(`I am is ${age} years old`);
}

//                   function call
const returnValue1 = introduceMe('satyam','software Engineer', 19)
const returnValue2 = introduceMe('Akash', 'Mechanical Enginner', 24)
const returnValue3 = introduceMe('Alok')
const returnValue4 = introduceMe()

// jo console.log(`My name is ${username || 'procodrr'} `); me 'procodrr' h vo default value h agr name argument nahi pass karta to bydefault procoddr username ke place par jayega. ye chhij ko hum direct as parameter bhi de sakte the , updated version is 
// function introduceMe(username = 'procodrr') {}


// main function creation ke time par parameter pass karte h matlab ye similar to variable jaisa h taki isko use kar sake, aur function call karte samay jo pass karte h usko arguments bolte h vo parameter me created variable(passed parameter) ke place par jaate h .