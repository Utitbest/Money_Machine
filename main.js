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
const ButtonSum = document.getElementsByClassName("dividder")[0]


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

// Javascript Function:
// Definition: A function is a reusable, 
// named block of code that performs a task. 
// Write the logic once, run it as 
// many times as needed.

// Code example:
// The function keyword, then a name, 
// then parentheses containing parameters. 
// name here is a parameter, a placeholder for 
// whatever gets passed in.
const rr = 6 
const tt = 1



ButtonSum.addEventListener('click', ()=>{
    const Input1 = document.getElementById("inputse1")
    const Input2 = document.getElementById("inputse2")

    if(Input1.value == "" || Input2.value == ""){
        Ptag.textContent = "Type into the input fields"
        return;
    }

    Calculator(Input2.value, Input1.value) 
})

function Calculator(tee, mrkebee){
   const t = Number(tee) + Number(mrkebee)
   Ptag.textContent = `the correct answer to the calculation is ${t}`
}

// Arrow Function
const GreatMan = (a, b)=>{
    a + b
}


console.log(GreatMan(4, 6))


let age = 20;

if (age < 13) {
  console.log("Child");
}else if (age < 18) {
  console.log("Teenager");
}else if(age < 19){
    console.log("Still a Teenger")
} else {
  console.log("Adult");
}


// Tenary Operator:

const CheckCond = age >= 18 ? "Teenager" : "Adult"

console.log(CheckCond)




function canVote(age){
    if(age >= 18){
        console.log(true)
    }else{
        console.log(false)
    }
} 

function getGrade(score){
    if(score >= 90){
        console.log("A")
    }else if(score >= 80){
        console.log("B")
    }else if(score >= 70){
        console.log("C")
    }else{
        console.log("F")
    }
}

(t)=>{
    dkdfjfsdf
}


const getGrade1 = (score)=>{ //Arrow function
    if(score >= 90){
        console.log("A")
    }else if(score >= 80){
        console.log("B")
    }else if(score >= 70){
        console.log("C")
    }else{
        console.log("F")
    }
}

getGrade1(100)
getGrade1(85)
getGrade1(40)
canVote(43) 
canVote(18)
canVote(12)

const CheckCond1 = age >= 18 ? "Teenager" : "Adult"


// Javascript Loop;
// Loops — The for Loop

// Definition: A loop repeats a block of code until a condition stops 
// being true.

// Why it matters: printing 1 to 100 without a loop means 100 lines. 
// With a loop it is 3 lines, and it still works if the list grows to 10,000 items.

// Analogy: running laps. Check whether you have done enough laps, run one, 
// add one to the counter, and check again.

// for
// forEach Loop
// while Loop
// do while
// for in
// for of

let ten = ["Godson", "boy", "girl", "Adiaho", "Utitofon", "Favour", "hello"]
let ten1 = 20

// for(let i = 0; i < ten1; i){

//     if(i === 8){
//         break
//     }

//     const spans = document.createElement("span")
//     spans.innerHTML = i
//     spans.style.color = "red"
//     spans.style.border = " 1px solid green"
//     spans.style.padding = "10px"
//     spans.style.display = "block"
//     Ptag.appendChild(spans)

// }

ten.forEach((r, u)=>{
    const spans = document.createElement("span")
    spans.innerHTML = r
    spans.style.color = "red"
    spans.style.border = " 1px solid green"
    spans.style.padding = "10px"
    spans.style.display = "block"
    spans.addEventListener("click", ()=>{
        
    })
    Ptag.appendChild(spans)
})


// Loops — while, do...while, break & continue
// while: use it when you do not know in advance how many times to repeat.

let count = 3;


count = "counts"
while (count > 0) {
    console.log(count);
    count--;
}
console.log("Liftoff!");// 3, 2, 1, Liftoff!

// Warning: every loop needs something inside that moves it toward stopping. 
// If the condition can never become false, the loop never ends. That is an infinite loop.

// do...while: the body always runs at least once, 
// because the condition is checked after the first round.

let attempts = 0;
do {
    attempts++;
    console.log(`Attempt ${attempts}`);
} while (attempts > 3); 


// Javascript Array

const arr = [   
                "Happy", 
                "Lord is my head", 
                45, true, 
                "the is a ball"
            ];


// Array methods in Javascripts
// includes
// indexOf
// join
// slice
// splice
// push
// pop
// shift 
// unshift


// const printarr = arr.includes(50) return true or false
// const printarr = arr.indexOf(4) return the index position of the value
// const printarr = arr.join(' ') use to join array remove the bracket and the strings even the comma
// const printarr = arr.slice(1, 3) return the section of an array depending on the paramter pass to it, the first parameter is start index and the second is were the stop. 
// const printarr = arr.splice(1, 0, "hello fool") 
// const printarr = arr.push("Utitbest") appends a new items to the end of the array and return the new length
// const printarr = arr.pop() removing last items of the array 
// const printarr = arr.shift() remove the first item of the array 
// const printarr = arr.unshift("Favour") 

// console.log(printarr)
// console.log(arr)


// C/W

// create array with ten items inside it:

// 1. What javascript method can be use to know the index number of array items?
// 2. How can we print the value of and array item with it index number?
// 3. What value will the array method include returns?
// 4. How many parameter does the slice method accepts?
// 5. Which array method changes the original array if use?
// 6. Remove 3 items from your array starting index 2 and let the deleteCount be 3, 
// and replace it with 6 items of your choice
// 7. With your understanding of the Join() array method, 
// give a brief explaination of hw it works
// 8. Which javascript method remove the last Item of an array, 
// and which one insert item to the beginning of the array
// 9.Define array?
// 10. Does array accept different data type, respond with yes or no


// Javascript Object
// Objects — Labelled Properties

// Definition: An object is a collection of key-value pairs that describes one thing.
// Each key is a label, and each value is the data stored under it.

// Array versus object: an array is a list of things accessed by position. 
// An object is one thing described by labelled properties, accessed by name.


Object
let nn = 50

const wrapper = {
    height: '',
    age: '300px',
    backgroundcolor: 'gray',
    name: '',
    padding: '10px',
    flexdirection: true,
    display: 'flex',
    gap: 456,
    great: ()=>{},
    hel: "Utitbest"
}

wrapper.name;        // "Ada", dot notation
wrapper["age"];      // 29, bracket notation
const key = "name";
wrapper[key];        // "Ada", key stored in a variable
wrapper.key;         // undefined, looks for a property literally called key
wrapper.email = "utitbesta@gmail.com"
wrapper.hub = 567
delete wrapper.hel 


// Define the following in your understanding
// Object.keys: It's use in getting all the keys in an object
// Object.values: It's use in getting all the values in and object
// Object.entries
// Object.fromEntries

const getKeywords = Object.fromEntries(Object.entries(wrapper).filter((_, e) => e !== ""))

console.log(getKeywords)
console.log(wrapper)


// Arrays of Objects — The Real-World Shape
// This is the most important pattern in the lesson. 
// When we fetch data from an API in Month 
// 2, and when our backend sends data in Month 4, 
// it arrives as an array of objects.

const students = [
  { name: "Ada", score: 82 },
  { name: "Grace", score: 91 },
  { name: "Linus", score: 67 },
  { name: "valuess",score: 45}
];

for(s of students){
    console.log(s.score)
}



// What Is the DOM?

// Definition: The DOM (Document Object Model) is the browser's 
// live representation of your HTML page, 
// built as a tree of objects that JavaScript can read and change.

// Analogy: your HTML file is the blueprint. The browser builds
//  the house from it, and the DOM is that house. JavaScript can
//   repaint a wall in the house, but the blueprint file stays exactly as it was. 
// Refresh the page and the house is rebuilt from the original blueprint.

console.clear()

const IdElement = document.getElementById("paragraphID");
const great = document.querySelector(".great");


// IdElement.textContent = "Hello my content has been change or modified with javascript";

// const ClassElement = document.getElementsByClassName("paragraphCLASS")[1];

// console.log(ClassElement);

// const intro = document.querySelector(".paragraphID");
// console.log(intro)

// const SelectAll = document.querySelectorAll(".paragraphCLASS")

// SelectAll.forEach(e =>{
//     let att = e.getAttribute("click")
//     if(att === "cli2"){
//         e.addEventListener("click", ()=>{
//             console.log("Hello bro you've just click me")
//         })
//     }
// })

// IdElement.textContent = "Hello, DOM!";
IdElement.style.color = "red"
great.src = "./assets/calculator-2374442_1280.png"
great.setAttribute("Willams", "I just set an attibute")
great.getAttribute("src")
great.removeAttribute("Willams")
great.classList.add("bestman")
// great.classList.remove("great")
great.id = "love"

// C/W 

// 1. create and html element in your html file and select it with
// javascript file link to the html file. Declare it with the let keyword 
// (use the id method to select the element in javascrpt) you know what 
// to do with the element at this point

// 2. add a classname to the selected element in javascript (multiple classname)

// 3. create 6 element with the same classname in your html
// file select the second element with the classname and change it's textcontent

// 4. loop the multiple element with the same class name and with forEach method, and 
// log the text content in it.

// 5. Assign a single attribute to those element after looping them

// 6. Define DOM in your own understanding outside the one I give.

const ParentElement = document.querySelector(".JavaScriptElements");

function usingJavascriptToCreateElement(text){
    const SecDiv1 = document.createElement('div')
    SecDiv1.className = "secondparent";
    
    const H1Element = document.createElement("h1")
    H1Element.textContent = "Hello, Welcome to my Page"

    const andotherDiv = document.createElement("div")
    andotherDiv.id = "andotherman"
    andotherDiv.innerHTML = `
        <div class="hellomrman">
            <div>${text}</div>
        </div>
    `;



    SecDiv1.append(H1Element, andotherDiv)
    ParentElement.append(SecDiv1)
}

usingJavascriptToCreateElement("Hello am a");

// 1. create a div element in your html file as a parent element 
// select the div element in javascript and create other elements and append 
// to it. pass a text to the element you'll create in javascript using 
// parameter

// Javascript EventListener

// Click
// dbclick

const EventList = document.getElementById("JSEvent")



// EventList.addEventListener("click", (e)=>{
//     alert("Hello dear, welcome to JS event")
// })

// EventList.addEventListener("dblclick", (e)=>{
//     if(e.key == "F12"){
//         alert("inspect")
//         window.onInsp
//         return false
//     }
// })


