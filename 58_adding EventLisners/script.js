function sayHi(){
    console.log('Hello World');
}

const h1 = document.querySelector('h1')

h1.addEventListener('click', sayHi)
h1.addEventListener('click', function(){
    console.log('Second Hii');
})

// + card ko click karne par empty card add hote jayenge
const container = document.querySelector('.container')
const addCard = document.querySelector('.add-card')
 
let count = 1

addCard.addEventListener('click', ()=> {
    const newCard = document.createElement('div')
    newCard.classList.add('card')
    newCard.innerText = count
    count++

    container.append(newCard)  // put newcard in container

})

// agar click karne kuchh hona chahiye to uske liye EventLister ka use karte h.