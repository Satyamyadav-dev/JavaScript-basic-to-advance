const container = document.querySelector('.container')

for(let i = 1; i <= 100; i++) {
    const imgContainer = document.createElement('div')  // create a div
    imgContainer.classList.add('img-container')          // add class='img-container' to div

    const newImage = document.createElement('img')
    newImage.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`

    const paragraph = document.createElement('p')
    paragraph.innerText = i

    imgContainer.append(newImage, paragraph)
    container.append(imgContainer)
}

// alternate version
// let myHTML = ``

// for (let i = 1; i <= 100; i++) {
//   myHTML += `
//     <div class="img-container">
//         <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png">
//         <p>${i}</p>
//     </div>
//     `
// }

// container.innerHTML = myHTML

// remove lecture starts here 
    const removeImg = document.querySelector("body > div > div:nth-child(5)").remove()
    removeImg.remove()

// removing entire container (first comment the thier children above two line of code)
container.remove()
// but behind the scene memory me rahta h. if you want to add again
// document.body.append(container)

// element.remove() ka hi use karne ka 