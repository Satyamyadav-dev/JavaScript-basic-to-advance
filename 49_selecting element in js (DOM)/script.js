// pichhle lec me humne dekha ki kisi bhi tag access hirerchi(nested tree like) jaisa karna pad raha tha. but hum kisi bhi tag direct access kar sakte h.
// 1. getElementByTagName
const allImages = document.getElementsByTagName('img') // ye jitne img tag use huye honge html sabko dega

//2.selecting element by document.getElementByClass 

const cssImage = document.getElementsByClassName('css-image')
  
// 3. document.getElementById  isme notice kar elements nahi kyu isko bhi pta h ek element ki ek hi unique Id hoti h 

const cssImage1 = document.getElementById('hhjjh')

// 4. most commoly used h document.querySelector() ye class, id , tag sabko select karta lekin jo pass karenge vo jaise class to .classname , for id #idname jaise css selector me karte h.

const allSelector = document.querySelector('.css-image')
const allSelector1 = document.querySelector('#hhjjh')

// 5. document.querySelectorAll() ye multiple tag par bhi same id diya to bhi sabko selector karega bhale hi usko pata id unique to bhi kyu iska kaam hi vahi h All h . class , id. lekin different id dena chahiye sabko for best practice.

const allSelector2 = document.querySelectorAll('#hhjjh')
// const li = document.querySelector('ul li') // nested

const allImages1 = document.querySelectorAll('img')

const ul = document.querySelector('ul');
const imageInsideUl = ul.querySelector('.css-image')
