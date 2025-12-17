debugger

const username = 'Anurag'
let userAge = 25
var a = 50

function add() {
  debugger
  const username = 'Akash'
  const x = 5
  const y = 8
  console.log(x + y)
  console.log(username)
}

function subtract() {
  const x = 15
  const y = 18
  console.log(x - y)
  console.log(username)
}

add()
subtract()

console.log('Program Ended')


// apne ko pta h ki let and const ka use karke create huaa variable script scope me jata h . but var se create huaa variable global scope (window ) me jata . 
// function bhi window scope me jata h jisme uska local scope create hota .