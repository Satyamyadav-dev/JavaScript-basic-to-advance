const h1 = document.querySelector('h1')
const container = document.querySelector(".container")
const img = document.querySelector('img')

// container.appendChild(h1)
// container.appendChild(h1.cloneNode(true))

//document.createElement -> koi bhi elements ko create kar sakte h.

const paragragh = document.createElement('p') //<p></p> create kar diya
// console.log(paragragh);               
paragragh.innerText = 'Hello World'         // <p>Hello World</p> daal diya isko append ke baad bhui sakte h.
container.append(paragragh)                // abhi chije sirf memory me store webpage show karne ke liye append() karna padega.

// create img element
// const imgElement = document.createElement('img')
// imgElement.src = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png'
// container.append(imgElement)

for(let i=2; i<=100; i++){
    const imgElement = document.createElement('img')
    imgElement.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`
    container.append(imgElement)

}















// for (let i = 2; i <=100; i++) {
//  const newImg = img.cloneNode()
//  newImg.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`
//  container.append(newImg)
// }