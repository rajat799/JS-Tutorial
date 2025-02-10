// 1) Primitive datatypes
// 7 types : string, Number, Boolean, null, undefined, symbol, BigInt

const score = 100
const scoreVal = 200.8
const isLoggedIn = true
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);

const bigNumber = 5345436543654545644n  // bigint number  


// Note
/*
Javascript is dynamically typed language 

eg: x = 10            // x is a number
    x = "rajat"       // now x is a string
    x = true          // now x is a boolean
*/

 
// 2) Reference Type (Non Primitive)
// Array, Objects, Functions (Importent for mastering JS)
 
// Array 
const heros = ["Yash", "Rishab", "Dq"]
 
// objects - 

let myObjects = {
    name: "Rajat",
    age: 20,
    gender: "male",
    course: "BCA"
}

// console.log(myObjects);


// functions

const myFunc = function(){
    console.log("hello World!");
}


// Typeof function 

console.log(typeof score);
console.log(typeof scoreVal);
console.log(typeof isLoggedIn);
console.log(typeof outsideTemp);

console.log(typeof userEmail);
console.log(typeof id);
console.log(typeof bigNumber);
