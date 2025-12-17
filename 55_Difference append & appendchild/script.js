const h1 = document.querySelector('h1')
const container = document.querySelector(".container")
const card = document.querySelector('.card')

// console.log(container.appendChild(h1)); 
container.appendChild(h1.cloneNode(true))

//append meaning -> kisi bhi document ke last me kuchh add karna.
// container.appendChild(h1) -> sirf appendChild karne par <h1>append & appendChild</h1> container ke andar to chale jayega but web page par dikhega nahi uske liye cloneNode karna padta h.
// cloneNode -> The cloneNode() method creates a copy of a node, and returns the clone.The cloneNode() method clones all attributes and their values. Set the deep parameter to true if you also want to clone descendants (children).



// for(let i=2; i<=100; i++){
//     const newCard = card.cloneNode()
//     newCard.innerText = i
//     container.appendChild(newCard)
// }

// difference between appendChild and append 
// appendChild -> appendChild se hum bus kisi NODE(html element) ko append sakte h . 
// append -> append ka use karke string ya multiple strings ko bhi append sakte h. and has no return value.

container.append('Pushpa 2')
// container.append('pushpa2', h1, 'allu arjun')

// kisi main parents ko appents nahi kar sakte h common sense jaise body, html ko container me thodi daal sakte.