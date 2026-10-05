// Welcome to javaScript

// What is JavaScript: ?
// Definition: JavaScript is a programming language that 
// runs in the browser and gives web pages behaviour
// the ability to react to what a user does, 
// like clicks, typing, scrolling, and time passing.

// Variable: 
// A variable is a named container that
//  holds a value you can use and change later.


let Hand = "Hello World!"

console.log(Hand)

Hand = 2
console.log(Hand)

Hand = true
console.log(Hand)


// Data Types — The Primitives

// Definition: A data type describes what 
// kind of value a variable holds, and what you can do with it.

// Primitives Datatypes are:
// String, = are plain text.
// Number, = Numbers 45 (Note the most not be inside quotes)
// Boolean, = true || false (It's use in running condition in javascript)
// null, = This means you are intentionally declaring a variable no value
// undefined = Javascript throw undefined when user trying using a declared variable with no value assign to it
// defined = when trying to use and undeclared variable, javascript throw reference error.

const gainsboro = 'Hello world have started learning Javascript!'
console.log(typeof gainsboro)

const numberVariable = 456788
console.log(typeof numberVariable)

const ConditionBool = true
console.log(typeof ConditionBool)

const NullValue = null
console.log(typeof NullValue)

const undefi = undefined
console.log(typeof undefi)



//Non - Primitives Datatypes are:
// function =  func(){} |  ()=>{}
// Array = []
// Object {}

// Example of and Object
const condition = {
    "width": 100,
    "height": 100,
    "display": 'flex',
    "alignItems": 'center',
    "justifyContent": 'center',
    "backgroundColor": 'gainsboro'
}   
console.log(typeof condition)

// Types of Variable in Javascript

// globle and Local Variable 
const xame = 34

function Utitbest(){
    const xame = "34fasf4"

    console.log(xame)
}
console.log(typeof Utitbest)

{
    x = "great"
    console.log(x)
}

// xame = "strings"
console.log(xame)


function Good(a, b, s){
    let c = null
    s = true
    if(!s){
        c = a - b
    }else{
        c = a + b
    }
    console.log(c)
}

Good(12, 8, false)