

// const username = 'Anurag'
// let userAge = 25
// var a = 50


function subtract() {
  const x = 15;
  const y = 18;
  const z = 28;

  console.log(x - y);  

  function child() {

      const childName = 'Golu';
      console.log(childName); // Outputs: Golu
      console.log(z); // Outputs: 28

      function grandChild() {
          const grandChildName = 'Molu';
          console.log(grandChildName);// Outputs: Molu
          console.log('grandchild', childName);

      }

      // Call grandChild inside child
      grandChild();
     
     
  }
 

  // Call child function here
  child();
}


subtract()

console.log('Program Ended')

//Lexical Scope -> suppose ek function create kiya aur uske andar ek inner function create kiya to inner function outer function ke scope(variable properties) ko access kar sakta but outer function can not access the scope of inner function.
// closure bhi yahi same tarike se kaam karta h.


// Block Scope -> kisi bhi block me agar const, let ka use kiya usko sirf within the block hi acees ka sakta hu but in case var we can access it within or outside of the block i alredy knew this concept fron began.