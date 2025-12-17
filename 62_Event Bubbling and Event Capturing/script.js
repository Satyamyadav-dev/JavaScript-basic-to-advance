const green = document.querySelector('.green')
const pink = document.querySelector('.pink')
const blue = document.querySelector('.blue')

// Event Bubbling -> iska matlab h ki agar hum kisi children ko click karte h to uske pure parent ko 'click' hota h .like here i applied eventlistener only on green but i click green,pink,blue means it will also click parent body,document and window. like jaise talab me stone throw karne par pure talab me waves generate hota h.

window.addEventListener('click', (e)=>{
    console.log('5.window Event Listner');
})

document.addEventListener('click', (e)=>{
    console.log('4.document Event Listner');
})

green.addEventListener('click', (e)=>{
    console.log('3.green Event Listner');
}, {once:true})

pink.addEventListener('click', (e)=>{
    console.log('2.pink Event Listner');
})

blue.addEventListener('click', (e)=>{
    e.stopPropagation()                   // but if i want to stop it's parents click use stoppropogatio() (spread hone se rokhta h)
     console.log('1.blue Event Listner');
})


// event capturing -> ka matlab hota agar mai children par event click karta hu to usko lagega pahle window,document,body and parents par click huaa h it is exactly reverse of bubbling.
//sabke last me ,{capture : true } or true likh par capturing hoga.

// green.addEventListener('click', (e)=>{
//     console.log('3.green Event Listner');
// },{capture:true})


// pink.addEventListener('click', (e)=>{
//     console.log('2.pink Event Listner');
// }, {once:true })


// {once:true} karne par vo event ek hi baar caal call hoga.


