debugger

sayHi()

const username = 'Anurag'
const userAge = 25

function sayHi() {
    const a = 14
    const b = 12
    add(7, 9)                // call to add function
}

function add(x, y) {
    kuchhBhi()             // call to kuchhBhi function
    return x + y
}

function kuchhBhi() {
    console.log('Kuchh bhi');
}

console.log('Program Ended');

/* imp padhna ->  **Execution Context in JavaScript**
An **execution context** is the environment in which JavaScript code is executed. It manages variables, functions, and the `this` keyword.

### **Types of Execution Contexts**
1. **Global Execution Context (GEC):**
   - Created when the script starts.
   - Manages global variables, functions, and sets `this` to the global object.

2. **Function Execution Context (FEC):**
   - Created when a function is invoked.
   - Handles function-specific variables, arguments, and `this`.

3. **Eval Execution Context (Optional):**
   - Created when `eval()` is used to execute code as a string (rarely used).

### **Phases**
1. **Creation Phase:**
   - Memory allocated for variables (hoisted as `undefined`) and functions.
2. **Execution Phase:**
   - Code runs line by line, updating variables and executing functions.

### **Call Stack**
- JavaScript uses a **call stack** to manage contexts.
- Global context loads first, followed by function contexts (pushed and popped as needed).*/


// 1.dekh sari baate global execution phase me hoti h agar koi const or let se variable create kiya hu to direct 'script' ke andar dikh jayega . 
// 2. par agar koi function create kar kiya to uska 'local' me pahle local memory creation hoga phir local memory execution phase hoga . suppose agar kisi ek function ke andar dusre function ko call kar raha hu to  jis function ke andar call kiya uske local memory execution me call wale function ka local memory creation phase and local memory execution phase hoga  like add ko sayHi me call h . diagram dekh samjh jayega.