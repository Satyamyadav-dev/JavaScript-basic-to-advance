const h1 = document.querySelector('h1').style.color = 'hotpink'

const h2 = document.querySelector('h2')
h2.style.color = 'red'
h2.style.backgroundColor = 'skyblue'

//change all anchor tag link color in teal
const allLinks = document.querySelectorAll('a')

// allLinks.forEach((element) => {
//     element.style.color = 'teal'    
// });

// using forof loop

for (let colors of allLinks) {
    // colors.style.color = 'red'
    // colors.style.textDecoration = 'none'
    // colors.style.fontFamily = 'cursive'
    // colors.style.fontWeight = '700'

    // alternate 
    // colors.style.cssText = ` text-decoration-line: none;  // ek hi baar me sab apply ho jayega
    //                          font-weight: 700;
    //                          font-variant-position: 18px;
    //                          font-family: cursive; 
    //                          color: red;`

    // or
    // colors.className = 'wavy-link green-link' // jitni class ko apply karna sabko space deke idhar hi ek baar me dena padega agar mai colors.className = me 'wavy-link' aur 'green-link' ko alg-alg line likhta to first class hide ho jata.

    // colors.setAttribute('class', 'green-link') // ye koi itna use nahi karta 

    // console.log(colors.classList);  // mostly use from above all aur hum bhi iska hi use karenge mostly.
        colors.classList.add('green-link')
        // colors.classList.remove('green-link')
        // colors.classList.toggle('green-link')
}

//  using map -> but using map we need convert first Nodelist first into actual array.

// Array.from(allLinks).map((colorOfLink)=>{
//      colorOfLink.style.color = 'red'
// })




// classList sabse zada use hota h maine jo   console.log(colors.classList); kiya mujhe saare anchor tag ka array provide karega jisme class h ya nahi sab agr classList ka use karke dure class ko add() ya remove karta hu purane class ko hide nahi karega. hum jaake sidha css file me propery de denge idhar aage classList.add() ya remove kar denge jis kisi bhi element par apply karna vo saari property. OK

// isko DOM manipulation kahte h jo html element ko hum js se change kar sakte h usko DOM manipulation bolte h.