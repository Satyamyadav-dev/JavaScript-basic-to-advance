// apne mo pta html attribute opening tag me dete h like class ,id ,img,href, Attributename = "value" 
// usko hum access aur set kar sakte h javascript me by the help DOM 

// getAttribute -> Purpose: Retrieves the value of a specified attribute on an HTML element.
// syntax: element.getAttribute(attributeName); 
// Returns: The value of the attribute, or null if the attribute does not exist.



const accessAttribute = document.querySelector('h1').getAttribute('class') // h1 par attribute class ka h uska value Hello h to line execute hogi to iski value 'Hello' return hogi

// setAttribute -> Purpose: Sets the value of a specified attribute on an HTML element. If the attribute already exists, it updates its value; if not, it adds the attribute
// syntax -> element.setAttribute(attributeName, value);

const setNewAttribute = document.querySelector('h1').setAttribute('satyam', 'webdeveloper') // isko devtool ke Element me dekh set h.

// const setIdToH1 = document.querySelector('h1').setAttribute('id', 'heading')   // dom ki help se id de sakta hu h1 aur uska color red ho jayega because heading ka color:red;

// kuchh html ke popular attribute ko hum direct hi set kar sakte h . like class , id 
// document.querySelector('h1').id = "Hih1tag"
// document.querySelector('h1').satyam = "h1komaaro" // ignore karega ise setAttribute se hi hoga 
