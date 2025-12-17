
// const dayNumber = 3

// if (dayNumber === 0) {
//   console.log('It is Sunday Today')
// } else if (dayNumber === 1) {
//   console.log('It is Monday Today')
// } else if (dayNumber === 2) {
//   console.log('It is Tuesday Today')
// } else if (dayNumber === 3) {
//   console.log('It is Wednesday Today')
// } else if (dayNumber === 4) {
//   console.log('It is Thursday Today')
// } else if (dayNumber === 5) {
//   console.log('It is Friday Today')
// } else if (dayNumber === 6) {
//   console.log('It is Saturday Today')
// } else {
//   console.log('Please Enter a Valid Day Number')
// }

const dayNumber = 3

switch(dayNumber){
    case 0:
        console.log('It is Sunday Today')
        break
    case 1:
        console.log('It is Monday Today')
        break
    case 2:
        console.log('It is Tuesday Today')
        break
    case 3:
        console.log('It is Wednesday Today')
        break
    case 4:
        console.log('It is Thursday Today')
        break
    case 5:
        console.log('It is Friday Today')
        break
    case 6:
        console.log('It is Saturday Today')
        break
        
    default:
        console.log('please enter the valid number');    


}

console.log('program ended');

// switch case same c program ke jiasa h switch(parameter) agar me switch me pass kiya huaa parameter case se match hota h to statement execute hoga. but switch case saare statement ko execute kar deta h ye uska nature h to uske liye 'break' lagana padta ki usko pta chale ki iske baad bahar niklna h.
// agar user koi aisa parameter pass karta h jo kisi bhi cases se match nahi hota to 'default' ka use karke karke user koi message provide karte valid arguments pass karne ke liye ye else ki tarah kaam karta h , switch case me order matter nahi kaun sa bhi case kidhar bhi likh agar cases se parameter match huaa to output aayega.
  
// const userName=  'Satyam'
// const userAge = 20


// if (userAge >= 0 && userAge <= 4) {
//     console.log(`${userName} is a kid.`);
//     console.log('And he/she is playing.');
// } else if (userAge >= 5 && userAge <= 17) {
//     console.log(`${userName} is a school student.`);
//     console.log('And he/she is learning science and maths.');
// } else if (userAge >= 18 && userAge <= 24) {
//     console.log(`${userName} is a college student.`);
//     console.log('And he/she is learning computer science.');
// } else if (userAge >= 25 && userAge <= 45) {
//     console.log(`${userName} is a working professional.`);
//     console.log('And he/she is a web developer.');
// } else if (userAge > 45 && userAge < 121) {
//     console.log(`${userName} is retired.`);
//     console.log('And he/she reads newspaper.');
// } else if (userAge >= 121) {
//     console.log(`${userName} is immortal.`);
//     console.log('And he/she reads newspaper.');
// } else {
//     console.log('Please Enter a Valid Age');
// }

// convert same into switch case 

// switch(true){

//     case  (userAge >= 0 && userAge <= 4):
//         console.log(`${userName} is a kid.`)
//         break
       
//     case (userAge >= 5 && userAge <= 17):
//         console.log(`${userName} is a school student.`)
//         break

//     case (userAge >= 18 && userAge <= 24):
//         console.log(`${userName} is a college student.`)
//         break
    
//     case (userAge >= 18 && userAge <= 24):
//         console.log(`${userName} is a working professional.`)
//         break
    
//     case (userAge > 45 && userAge < 121):
//         console.log(`${userName} is retired.`)
//         break

//     case  (userAge >= 121):
//         console.log(`${userName} is immortal.`)
//         break

//     default:
//         console.log('plz provide exiting age') 

// }

// making switch case for students grades 
const marks = 13

switch(true){

    case (marks >= 85 && marks <= 100):
        console.log('student has a A grade')
        break
    
    case (marks >= 60 && marks <= 84):
        console.log('student has B grade')
        break

    case (marks >= 40 && marks <= 59):
        console.log('student has C grade')
        break
     case (marks >= 1 && marks <= 39):
        console.log('student has D grade');
        break

    default:
        console.log('student has unsuccesful');

        
}



// Why Pass true in switch?
// Default Behavior: switch compares the value passed (e.g., marks) with each case.
// Limitation: Can't directly evaluate conditions like marks >= 85.
// swich case me arguments true tab karte h jab complex evaluation karna padta like age checking etc. agr direct marks pass karta to vo sirf direct matching kar pata h complex nahi.

