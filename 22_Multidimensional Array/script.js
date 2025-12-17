// Multidimensional is create  inside an aaray 

const nameAndNumber = [['akash', 90], ['suresh', 85], ['satyam', 86], ['yash',9]]
// in multidimentional position of arrays is starts from 0,1,2... 
// how to access array
const firstArray = nameAndNumber[0] // it return the ['akash', 90]
// if i want to acess an akash only then
const firstArray1 = nameAndNumber[0][0]
// to add an element in array 
const add = nameAndNumber[1][2] = 'Mango'
console.log(add);
console.log(nameAndNumber);

// google se image deke banaya h don't worry
const tic_Tac_Toe = [ 

    ['x', null, null],
     [null, null, 'o'],
      ['o', null, 'x']
      
    ]