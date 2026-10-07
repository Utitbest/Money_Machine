// Welcome to javaScript

// What is JavaScript: ?
// Definition: JavaScript is a programming language that 
// runs in the browser and gives web pages behaviour
// the ability to react to what a user does, 
// like clicks, typing, scrolling, and time passing.

// Variable: 
// A variable is a named container that
//  holds a value you can use and change later.

const Ptag = document.getElementById("badgy")

let Hand = "Hello World!"

console.log(Hand);

Hand = 2
console.log(Hand);

Hand = true
console.log(Hand);


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

// Javascript Operators

// Arithmetic Operator
// Assigment Operator
// Comparison Operator

// Arithmetic operators perform arithmetic on 
// numbers (literals or variables).

// Operator	Description
// +	Addition
// -	Subtraction
// *	Multiplication
// **	Exponentiation (ES2016)
// /	Division
// %	Modulus (Remainder)
// ++	Increment
// --	Decrement

const m = 5 + 5
console.log(m)

const g = 5 - 5
console.log(g)

const mm = 5 * 5
console.log(mm)

// const mwm = 5 ** 5
const mwm = 5 
console.log(Math.pow(mwm, 5))

const gg = 10 / 3 
console.log(gg)

const oo = 10 % 6 
console.log(oo)

let rt = 5
rt++;
console.log(rt)

let r = 5
rt--;
console.log(r)

// Assigment Operator


// JavaScript Assignment Operators
// Assignment operators assign values to JavaScript variables.

// Given that x = 10 and y = 5, the table below explains the assignment operators:

// Operator	Example	Same As	Result
// =	x = y	x = y	x = 5
// +=	x += y	x = x + y	x = 15
// -=	x -= y	x = x - y	x = 5
// *=	x *= y	x = x * y	x = 50
// **=	x **= y	x = x ** y	x = 100000
// /=	x /= y	x = x / y	x = 2

const boy = "Boy School"

let ui = 10;
ui += 5
console.log(ui)

let u = 10;
u -= 5
console.log(u)

const uboy = "hello world!"

const tboy = "Am Utitbest ";
const gh = tboy.concat(uboy)
console.log(gh);

const utit = `Am a boy of thirty years plus ${uboy}`

console.log(utit)


// Comparison Operator
// Operator	Description	Comparing	Returns	
// ==	equal to	x == 8	false	
// x == 5	true	
// x == "5"	true	
// ===	equal value and equal type	x === 5	true	
// x === "5"	false	
// !=	not equal	x != 8	true	
// !==	not equal value or not equal type	x !== 5	false	
// x !== "5"	true	
// x !== 8	true	
// > greater than	x > 8	false	
// < less than	x < 8	true	
// >= greater than or equal to	x >= 8	false	
// <= less than or equal to	x <= 8	true



const come = 5
const ggt = "5"

const cone = come < 7 || come < 6

Ptag.textContent = cone // true or false

// if(come < 7 && come > 6){
//     Ptag.textContent = "One"
// }else{
//     Ptag.textContent = "Two"
// }