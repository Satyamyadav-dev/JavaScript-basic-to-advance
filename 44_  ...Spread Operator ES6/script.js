    // Merging Arrays: Combine two or more arrays as well as string .

    const num1 = [1, 2, 3, 4]
    const num2 = [5, 6, 7, 8]
    const myName = 'Satyam'


    const merged = [...num1, ...num2, ...myName]

    // Copying Arrays: Create a shallow copy of an array.

    const arr1 = [...num1]

    // Updating an object:
const obj = { a: 1, b: 2 };
const updatedObj = { ...obj, b: 3 }; // { a: 1, b: 3 }

    // Copying Objects: Create a shallow copy of an object.

    const obj1= {
        name : 'Satyam',
        age: 20
    }

    const obj2 = {...obj1}

    const obj3 = {
        city: 'Bangluru',

    }

    const obj4 = {...obj1, ...obj3}

    // add array element by passing as arguments by spread operator

    function add(){
        let sum = 0
        for(let i =0; i<arguments.length; i++){
            sum = sum + arguments[i]
        }
        return sum
    }

    // call 
    add(...merged) // output : 36satyam or add(1, 2, 3) outptu is 6