// hum jo bhi html code (tag) sab behind the scene sabka object create hota h . actually dom saare html ko object me convert karta h ek hirarichal form me store aur inko access bhi vaise hi karte h jaise object element kyu ki abhi maine bataya ki ye behind the scene objects pagla

// to see all object in using DOM bahot sari chije h jaake explore kar usme se apni kaam chhije dekh 
// console.dir(document)/


// to change the image by js dom 
// document.body.children[10].src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDo890dsxpB5UCLQFdVBWmK4qVxTrsrLEEUg&s'
// 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDo890dsxpB5UCLQFdVBWmK4qVxTrsrLEEUg&s'

// to change html content 
// document.body.children[1].innercontent = 'Hello World'

// document.body.children[1].innercontent = 'Hello World' , iska matlab document ka list h uska child HTML h, and HTML ka direct child 'head' and 'body' ab body ke andar ke andar jo first child h1 uske innercontent ko change karna h.