const score = 400;
// console.log(score);

const balance = new Number(100);
// console.log(balance);

// console.log(balance.toString().length);  // 3
// console.log(balance.toFixed(2));   // 100.00  -- > 

const OtherNumber = 1123.4553;
 
// console.log(OtherNumber.toPrecision(4));  // roundoff

const cost = 1000000;

// console.log(cost.toLocaleString('en-IN'));  // default: US standards 
// give para: en-IN for indian no system

// -----------------------Maths-------------------------

console.log(Math.PI);

console.log(Math.abs(-6));

console.log(Math.round(3.7));

console.log(Math.ceil(7.1));

console.log(Math.floor(7.1));

console.log(Math.min(3, 56, 7, 87));


// imp 

console.log(Math.random()); // gives no between 0 and 1

console.log((Math.random()*10) +1); // *10 for shifting it to left and adding 1 to it

console.log(Math.floor((Math.random()*10) +1)); // for single value

// in minimum range 10 to 20 

const min = 10;
const max = 20;
const range = max - min;

console.log(Math.floor(Math.random() * (range + 1)) + min); // imp 



