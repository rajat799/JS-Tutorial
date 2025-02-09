// console.log(2 == 1);
// console.log(2 >= 1);
// console.log(2 <= 1);
// console.log(2 == 1);
// console.log(2 != 1);

// Note ----> Avoid this type of conversions
// different datatypes

console.log("2" > 1); // T

console.log("02" > 2); // F

console.log("Checking with null");

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);

console.log("Checking with undefined");

console.log(undefined < 0);
console.log(undefined == 0);
console.log(undefined > 0);

// === (strict check ie checks the value and the datatype also)
console.log("strict check");

console.log("2" === 2);

console.log(2 === 2);
