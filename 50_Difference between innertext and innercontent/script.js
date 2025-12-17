const paragragh = document.querySelector('p')
// console.log(paragragh.innerHTML);
// console.log(paragragh.innerText);
console.log(paragragh.innercontent);

// Note the difference between this three 
// paragragh.innerHTML  = '<h4>hiii</h4>'
// paragragh.textContent = '<h4>Hello</h4>'
// paragragh.innerText = '<h4>Hello!!!</h4>'

// console.log(paragragh.innerHtml);
// console.log(paragragh.innerText);
// console.log(paragragh.textContent);




//Difference between the textContent and innertext
//  Using "textContent" will return the complete text content matlab jaisa jaisa html me likha h vaisa same return hoga, including the hidden text also. However, using "innerText" will only return the visible text content, excluding the hidden text matlab jaisa browser par dokhega vaisa hi dikhega.