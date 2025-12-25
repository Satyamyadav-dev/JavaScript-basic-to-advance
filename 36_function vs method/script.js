const maths = {
    E:2.71828,
    add : function add (a, b) {
        return a+b

    },
    subtract : function (a, b){           // access maths.subtract(5,2)
        console.log(a-b);
    },
    square: function (num){             // aceess by maths.square(5) 
        return num*num
    } ,
    cube(num){
        return num*num*num
    }
}
// now access by maths.add(5, 6) aur apne ko pta h jo chhij ko ._____() karke access karte h usko hi to method bolte h .



// apna normal function to function hota h par usi function ko hum object ke andar daal dete h to method use bolte h.
// accha function ka syntax notice karta hoga yaha function name du ya na du kuchh farak nahi padta kyu ki vo name se nahi access hoga usko ek key dena padega .
//  aur object ke element ko key se hi to access karte h. 