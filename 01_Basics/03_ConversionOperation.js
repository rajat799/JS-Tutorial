// Value conversion

let score = "rajat";
/*
console.log(typeof score);
console.log(typeof(score));

let valueinNumber = Number(score);
console.log(typeof valueinNumber)

console.log(valueinNumber)
*/

//notes
// Null - it is an object type = object
// boolean - it will return 1 or 0 (T OR F)
// undefined - it will return undefined

// Conversions Rules

// "33" => 33
// "33svs" => NaN (not an number)

let isLoggedIn = ""

let booleanIsLoggedIn = Boolean(isLoggedIn)

// console.log(booleanIsLoggedIn)

// note 

// 1 => true, 0=> false
// "" => false
// "rajat" => true


let someNumer = 33

let stringNumber = String(someNumer)

// console.log(typeof stringNumber);
// console.log(stringNumber);


// *********************************Operations Video - 4 *****************************************

let value = 3
let negValue = -value

// console.log(negValue);


let str1 = "hello "
let str2 = "Rajat"

let str3 = str1 + str2

console.log(str3)

// console.log("1" + 1)
// console.log(1 + "1")
// console.log("1" + 2 + 2); // if string is first all considered as string
// console.log(1 + 2 + "2"); // if string is last then first conversion will happen first ie 1+2 = 3 the concatination of 3 and 2 ie 32


// dont prefer this code 
// console.log(+true); // 1
// console.log(+""); // 0


let num1, num2, num3

num1 = num2 = num3 = 2 + 2

let gameCounter = 100

gameCounter++;

// console.log(gameCounter);


// prefix and postfix

let x = 3
const y = x++;

console.log(`x: ${x} , y: ${y}`)

let a = 5
const b = ++a;

console.log(`a: ${a}, b: ${b}`);