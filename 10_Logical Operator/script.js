const userAge = 17

let isCollegeStudent = (userAge >= 18) && (userAge <= 24)
let isSchoolStudent = (userAge >=5) && (userAge <= 18)

const isStudent = isCollegeStudent || isSchoolStudent

const andResult = 0 && 2
const orResult = 0 || 2

// where 0 is falsy and any number is truthy 

const andResult2 = '' && 'hello'
const orResult2 = '' && 'hello'

// where '' (empty string) is falsy and hello is truthy 
// there are 5 types of falsy we see in lec 8 0,-0,undefined,null,NaN,''.


const a = 3;
const b = -2;

console.log(!(a > 0 || b > 0));
// Expected output: false

// not (!) operator true ko false, false ko true me convert kar deta h

