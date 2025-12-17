const months = ['january', 'february', 'march', 'april', 'may']

// const capitalMonth = months.forEach((month, index) => {
//     console.log(index+1, months);
//     return month.toUpperCase()
// })


const capitalMonth1 = months.map((month, index, array) => {
    console.log(index+1, month);
    return month.toUpperCase()
})

const myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const num = myNum.map( (num) => {   // jabhi bhi arrow function block {} create k to return key daalna            padega                                 padega nahi value ke place par undrfined aayega 
    return num * 2
})




//1.map() -> map method return me ek pura array deta h . jo ki forEach me kabhi bhi return value nahi hoti h vo hamesa undefined return karta h because forEach bhi apneaap me ek function h.map hamesha pure aaray ke element ko jo bhi condition diya vo pure array ke element par operation karta and then pura array return karta h.

//2.filter() -> filter ka use karke hum kuchh condition apply karke array ke kuchh parts (eleemnt) ko access kar sakte h jaise database me huge numbers of data hota h kuchh condition deke neccessary data ko access karte h vaisa hi idhar bhi.vaise filter name se hi samjhta h ki chhijo ko filterout karna based on condition .

const myfriends = ['Anurag', 'Neha', 'Ankul', 'manish', 'Sarwadeep']

const friends = myfriends.filter( (friend , index, array)=>{
    return console.log( friend.toLocaleLowerCase().includes('A'));
})

const filterednum = myNum.filter((num)=>{
    return num >= 5
    
})
console.log('*********');

const filteremonth = months.filter((month, index, array)=>{
    console.log(month.toLocaleLowerCase().includes('m'));
    // console.log(array);
    return month.toLocaleLowerCase( ).includes('m')
})

const students = [
    {
        name: 'Akash',
        age:21
    },
    {
        name: 'Adarsh',
        age:17
    },
    {
        name: 'Amir',
        age:18
    },
    {
        name: 'Raman',
        age:23
    },
    {
        name: 'Nidhi',
        age:16
    },
]

const filterstudent = students.filter((student)=>{
    return student.age >=18
})

// chaining rule

const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const chainResult = number.map((num)=>{
     return num *10}).map((num)=> num +2).filter((num)=> num >= 40)

// chaining rule me first map jo h evaluted array second map ko pass karega and second map evaluted array me +2 karega then vo filter ko pass hoga filter saare >=40 waale element ka array return karega .  


// achha map , filter, reduce these are called higher order function it takes callback function as arguments.
// map(kuchhbhi variable, index, array) ye format fix h 
