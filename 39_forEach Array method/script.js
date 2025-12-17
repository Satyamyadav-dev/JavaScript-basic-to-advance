const fruits = ['Banana', 'grapes', 'peach', 'apple', 'mango']

// using forof loop

// for(const fruit of fruits){
//     console.log(fruit);
// }

// fruits.forEach(function(fruit){    // notice kiya ye .forEach() se access huaa h isliye method h
//     console.log(fruit);
// })


fruits.forEach((fruit) => {     //by arrow function
    console.log(fruit);
} 

)

// forEach -> array me jitne element honge utni baar run karega tabhi to isko forEach h.