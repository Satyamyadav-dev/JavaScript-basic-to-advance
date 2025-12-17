const userinput = document.querySelector('#userinput')
const paragragh = document.querySelector('p')

//1. click event

// userinput.addEventListener('click', ()=>{
//     console.log('clicked userinput');
// })

//2. doubleclick event -> dblclick

// userinput.addEventListener('dblclick', ()=>{
//     console.log('userinput double click');
// })

//3. input event -> jo bhi text input karenge vo dikhega console window par. parathesis me name vaise to kuchh bhi de sakte h par event ke liye h public generally 'e' , 'evt' or event deti h. aur ye function js behind the scene khud se call karta h.
let inputValue
// userinput.addEventListener('input', (event)=>{  
//           // console.log(event);
//        console.log(event.target.value);
//        inputValue = event.target.value            // vo input variables me bhi store kar sakte h. 
//        paragragh.innerText = event.target.value

//      })

//4. change event -> jab tak input type karenge tab tak kuchh bhi nahi hoga lekin jaise type karke bahar likalenge vaise  hi reflect hoga vo input .

// userinput.addEventListener('change', (event)=>{  
//   console.log(event);  
//        console.log(event.target.value);
//        inputValue = event.target.value            // vo input variables me bhi store kar sakte h. 
//        paragragh.innerText = event.target.value

//      })

//5. focus event -> jaise hi input box par click karenge uska hi matlab hota h ki vo focus kar raha h input box .

// userinput.addEventListener('focus', (e) => {
//   console.log(e);
//   console.log(e.target.value);
//   inputValue = e.target.value
//   paragragh.innerText = e.target.value


// })

//6.blur event -> kahi bhi click karenge to blur hoga actually ye bhi focus event hi h.

// userinput.addEventListener('blur', (e)=>{
//   console.log(e);
//  console.log(e.target.value);
//  inputValue = e.target.value             
// paragragh.innerText = e.target.value


// })
