 const user = {
    firstName: 'Akash',lastName : 'singh',education: '12',city:'Banglore'
}

// object ko humm {} ke andar likhte ye key:value consists karta h aur key:value ke comma(,) dena important h

const user1 = {
    firstName:'Akash',
    // last-Name: 'singh' here last-Name not possible without ""
    "last-Name":'singh',
    satyam: "Developer",
   
}
//acess the value
console.log(user1.firstName);
console.log(user1["firstName"]);
console.log(user1["last-Name"]);
console.log(user1.satyam);

// jab bhi key ko - deke bana raha h to "" me rakhna h like "last-Name" baki normal key chalega without "" ke value ko 2 tarike se acess kar sakte h ek by jo variable ka block create kiya h uska name.key console.log(user1.firstName); second by console.log(user1["firstName"]);  

// Note: jo key:value directly us block me exist nahi h to uske liye undefined batayega jaise agr mai user.satyam acess karu to undefined aayega because it is in the  user1

// Update the object
// user1.age = 22
// user1["is_student"] = true

// object inside object we can create number of objects inside oe object

const user2 = {
    firstName:'Akash',
    "last-Name":'singh',
    satyam: "Developer",
    address: {
        
        city: 'Bangalore',
        pincode: 25262,
        state: 'Karnataka',
        moreDetails:{
            population:'2 million',
            area:'500 sqkm'

        }

    }
}
//udating in moreDetails
// user2.address.moreDetails.weather = 'sunny'
// console.log(user1.address.city);