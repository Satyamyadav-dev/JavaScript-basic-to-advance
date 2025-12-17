const h1 = document.querySelector('h1')
const addcard = document.querySelector('.card')
const container = document.querySelector('.container')


// **** mouse Event

let count = 0

// addcard.addEventListener('click', () => {
//     const newCard = document.createElement('div')
//     newCard.classList.add('card')
//     newCard.innerText = count++
//     container.append(newCard)
// })

// addcard.addEventListener('dblclick', () => {
//     const newCard = document.createElement('div')
//     newCard.classList.add('card')
//     newCard.innerText = count++
//     container.append(newCard)
// })



//1. mousedown -> jiase mouseki button dabayega ya click karega to event hota h.

// addcard.addEventListener('mousedown', () => {
//     const newCard = document.createElement('div')
//     newCard.classList.add('card')
//     newCard.innerText = count++
//     container.append(newCard)
// })

//2.mouseup -> jaise button push karke chhodega vaise hi event hoga.


// addcard.addEventListener('mouseup', () => {
//     const newCard = document.createElement('div')
//     newCard.classList.add('card')
//     newCard.innerText = count++
//     container.append(newCard)
// })

//3.mouseenter -> jis bhi element par apply kar diya us element par (or uske specified area) me enter karte hi fire hoga. 

// addcard.addEventListener('mouseenter', () => {
//     const newCard = document.createElement('div')
//     newCard.classList.add('card')
//     newCard.innerText = count++
//     container.append(newCard)
// })

//4. mouseremove -> reverse uske area ke bahar nikalte hi fire hoga.

// addcard.addEventListener('mouseleave', () => {
//         const newCard = document.createElement('div')
//         newCard.classList.add('card')
//         newCard.innerText = count++
//         container.append(newCard)
//     })

//5. mousemove -> jab tak specified area par mouse move karega tab tak event fire hoga.

// addcard.addEventListener('mousemove', (e) => {
//     console.log(e);
//     const newCard = document.createElement('div')
//     newCard.classList.add('card')
//     newCard.innerText = count++
//     container.append(newCard)
// })

// 6. mouseout -> same as mouseleave

// 7. mouseover -> same as enter 

// addcard.addEventListener('mouseover', (e) => {
//     console.log(e);
//     const newCard = document.createElement('div')
//     newCard.classList.add('card')
//     newCard.innerText = count++
//     container.append(newCard)
// })

//8. wheel -> wheel applied area par jab tak scroll hoga tab tak event fire hoga.

// addcard.addEventListener('wheel', (e) => {
//     console.log(e);
//     const newCard = document.createElement('div')
//     newCard.classList.add('card')
//     newCard.innerText = count++
//     container.append(newCard)
// })

// **** mobiledevices touchevents

// 1.touchstart -> click karne par fire hoga.

// addcard.addEventListener('touchstart', (e) => {
//     console.log(e);
//     const newCard = document.createElement('div')
//     newCard.classList.add('card')
//     newCard.innerText = count++
//     container.append(newCard)
// })

// 2.touchend -> click karke chhodte hi fired hog a like mousedown event

// addcard.addEventListener('touchend', (e) => {
//     console.log(e);
//     const newCard = document.createElement('div')
//     newCard.classList.add('card')
//     newCard.innerText = count++
//     container.append(newCard)
// })

// 3.touchmove -> doubleclick karke move karega to fire hoga.

// addcard.addEventListener('touchmove', (e) => {
//     console.log(e);
//     const newCard = document.createElement('div')
//     newCard.classList.add('card')
//     newCard.innerText = count++
//     container.append(newCard)
// })

// 5. drag -> work in desktop mode device double click karke drag karne par fire hota h.

// h1 .addEventListener('drag', (e) => {
//     console.log(e);
//     const newCard = document.createElement('div')
//     newCard.classList.add('card')
//     newCard.innerText = count++
//     container.append(newCard)
// })

// pointermove -> same as touchmove or mousemove but it works in both mode desktop as well as mobile.

// addcard.addEventListener('pointermove', (e) => {
//     console.log(e);
//     const newCard = document.createElement('div')
//     newCard.classList.add('card')
//     newCard.innerText = count++
//     container.append(newCard)
// })

// pointerenter -> enter karne par fired hoga.

// addcard.addEventListener('pointerenter', (e) => {
//     console.log(e);
//     const newCard = document.createElement('div')
//     newCard.classList.add('card')
//     newCard.innerText = count++
//     container.append(newCard)
// })

// pointerleave-> when leaves it will fire.

// addcard.addEventListener('pointerleave', (e) => {
//     console.log(e);
//     const newCard = document.createElement('div')
//     newCard.classList.add('card')
//     newCard.innerText = count++
//     container.append(newCard)
// })