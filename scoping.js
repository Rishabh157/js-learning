// scope  -> variable  

// var  ,  let   , const


// var num1 = 10        // scope -> 10
// console.log(num1)

// // -------------     // scopre -> 10

// var num1 = 100       // scopre -> 100
// console.log(num1)

// let num1 = 10

// num1 = 20

// console.log(num1)

let globalScope = "World"

function scope(){
    let msg =  "HELLO"                // scope  local scope
    console.log(globalScope)          // global scope
    console.log(msg)   
}

console.log(globalScope)
scope()
