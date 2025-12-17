const firstLink = document.querySelector('.firstlink')
 // how to access parent of first anchor tag parent of parent again their etc.
 console.log(firstLink.parentElement.parentElement.parentElement.parentNode);

 // how to access nextElementSibling and previousElementSibling
 // sibling(reallife me to bhai bahen hota h same aise hi html ke bhi h ) means abhi  samjh paragragh tag me total 4 anchor tag h agr mai chahta hu jo first anchor tag usake sibling mujhe chahiye.

console.log(firstLink.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling);
// first anchor tag ke 4 SIBLINGS H 3 anchor tag AUR 1 italic tag (bhai h) ab iske bad nextElementSibling karunga to NULL aayega paragraph me 4 hi iske bhai h.

// same for previousElementSiblings also
console.log(firstLink.previousElementSibling);

// firstanchor tag has only one previouElementSibling which bold 

// abhi nextElementSibling & previousElementSibling to samjh jo tag ka siblings dusra tag deta h lekin ek dusra h jo bich ka TEXT (isko Node bhi bolte h see next lec) bhi deta h vo nextSibling and previousSibling.

console.log(firstLink.nextSibling); //output: 'of a website, through the use of' 
console.log(firstLink.previousSibling.nextSibling); // output : 'is the development of the'

// sabka type object h Anyway ye h hi DOM





 
