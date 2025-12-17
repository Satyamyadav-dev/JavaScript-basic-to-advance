const user = {
    firstName: 'Adarsh',
    lastName: 'Singh',
    pata: {
      city: 'Bangalore',
      pinCode: 876876,
      state: 'Karnataka',
      moreDetails: {
        population: 9798897897,
        area: '787 sq km',
      },
    },
    age: 15,
    isGraduate: false,
  }

  //update in user
  user.middleName = 'Ram'
  // delete the key object
//   delete user.middleName

//1.object.seal() -> ye method object me na koi new key add karega aur nahi delete karega bas exiting key ko update kar sakta h.
// Object.seal(user)
// user.student = 'no'
// console.log(user.student);
// delete user.middleName
// console.log(delete user.middleName);
// user.firstName = 'satyam' // exiting key update

// 2. object.freeze -> it is more powerfull than object.seal() kuchh karne hi nahi dega but in nested object it will allow to be modify the value.

// 3. in key in javascript used to check weather the key is exiting objects or nor jaise includes() se variable ki value pata karte the.

// console.log('isGraduate' in user );

// par ko quotes me daalna jaruri h nahi error aayega 