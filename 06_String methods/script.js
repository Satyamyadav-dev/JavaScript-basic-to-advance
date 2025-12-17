// Methods (Without Argument)

const message = 'Hello World!'[6]
const a = message.length
const faltuMessage = '      Hi, I am Satyam.     '
const upper =faltuMessage.toUpperCase()
const lower =faltuMessage.toLowerCase()
const trim = faltuMessage.trim()
const trimStart = faltuMessage.trimStart()
const trimEnd = faltuMessage.trimEnd()

const finalMessage = faltuMessage.trim().toUpperCase().toLowerCase()


// length:- length ka use karke hum pure string ki  length ko caculate kar sakte h.
// toUpperCase():- it is use to convert the string into uppercase .
// toLowerCase():- it is use to convert the string into lowercase.
// trim():- ye bas string ke agal-bagal ke extra space ko remove karta h.
// .trim().toUpperCase().toLowerCase():- it is called chainig in js we can use like as .
// jaha par bhi laga h bracket laga h like toUpperCase () iska method type function(f) h jo call karta h aaage ke lecture me dekhenge.

// Methods (With Argument):- means kuchh parameter pass karna padega 

const include1 = faltuMessage.includes('Satyam')
const include2 = faltuMessage.includes('satyam')
const index1 = trim.indexOf('Satyam')
const index2 = trim.indexOf('am')
const index3 = trim.indexOf('z')
const replaceMessage1 = faltuMessage.replace('Hi','Hello')
const replaceMessage2 = faltuMessage.replace('Bye', 'Hello')
const replaceMessage3 = faltuMessage.replace('a','A')
const replaceMessage4 = faltuMessage.replaceAll('a','A')
const concat1 = message.concat(trim)
const concat2 = message.concat(', ',trim)
// const add =  message + " " + trim  //purana wala method h
const lastFourDigit = '1234'
const hideAccountNumber = lastFourDigit.padStart (16, '*')
const endpad = lastFourDigit.padEnd(16, '*')
const myName = ' My name is Satyam'
const characterFind = myName.charAt(4)
const characterCode = myName.charCodeAt(4)
const breakString = myName.split(' ')
console.log(breakString);

// stringTemplate
// using concate()
const concatenatedString = `last four digit of my account number is`.concat(' ',hideAccountNumber)
console.log(concatenatedString);
// using templatestring
const templateString = `last four digit of of my account number is ${hideAccountNumber} `
console.log(templateString);
const bankBalance = 2100
const templateString2 = `i have ₹${bankBalance} in my account.`




// includes():- includes() ka use hum ye pta kar sakte h ki particular jo banaya usme ye words exit karta h ki nahi . iski output true and false me aata h agar exits karta h to true else false par ha jo argument pass kar raha vo exact vaisa hi hona chahiye jaisa string maine create kiya h.
// indexof():- indexof() se hum kisi bhi character ya string ka index(position) find kar sakte h programming me indexing 0 se start hoti. agar vo character ya string exist karta to index return hoga  nahi exist karta to -1 dega.
// replace():- replace('','') se existing string me kuchh replace kar sakte h argument me first kya replace karna h second kis chhij se replace karna h . replaceMessage2 me Bye exist nahi karta to as it is string aa jayega without any replacement . replaceMessage3 me faltuMessage me jo first 'a' milega na usko hi bas vo 'A' me change hoga baki sabko nahi. agar sabko karna h to replaceall ka use karna padega.
// concat():- concat two string ko add karta h isme iske argument me multiple string pass kar sakta hu .
// padstart:- padstart ka use karke last ke kuch digitko hidden kar sakte h const lastFourDigit = '1234'iska itna digit hide nahi karna h baki jo bach gaye vo hide ho jayenge.padend me same hoga bas vo hide starting ke four digit ke bad se bacha digits ko karega.
// charAt():- charAt ka use karke character ko find kar sakte h using their index number it is another method to find character by position first one in the first line .
// split():- split string ko break kar deta h.

// templateliterals:-In JavaScript, string templates (also called template literals) are a convenient way to embed expressions or variables directly inside a string. They use backticks (``) instead of regular quotes and allow for embedding expressions using ${expression} syntax. isko concat() and + se string ko add karne wale se hamesa zada use karte.






