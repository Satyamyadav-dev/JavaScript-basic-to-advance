// debugger
console.log(a);  // console window par Cannot access 'a' before initialization batayega kyu ki hum isko delare karne se pahle access kar .

const a ='Satyam'
  
 
Hi()

// function definition 
// function Declaration 
function Hi(){
    console.log('HII');
}


// function defition 
// function Expression ()
var Sayhi = function(){  // this is called as anonymous function  where we can create a function without name like here 
    console.log(Hello);
}

Sayhi()

// agar hum const , let use karke koi variable declare karte h par usko declaration se pahle access karte h to unaccessible hoga par agr function ko before declaration call karte h to access hoga kyu ki hum jante memory creation phase me pura function hi store hota h . par aisa variable ke case me nahi hota memory creation phase me undefined store h therefore unaccessible hota h. hoisting basically yahi bolta h ki hume before declaration kisi bhi chhij ko access nahi karna chahiye see on gpt,mdn docs.