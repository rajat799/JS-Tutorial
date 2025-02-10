const name = "rajat ";
const repoCount = 30;

// outdated method for concatination
console.log(name + repoCount + " repos");

// updated method for concatination (use bacticks --> string interpolation)
console.log(`my name is ${name}and repo count is ${repoCount}`); //IMPPPPP


// different way to declare the string 
const gameName = new String("Rajat");

console.log(gameName[0]);  // accessing using index value
 
console.log(gameName.__proto__); // to show all the objects of the methods  NOTE: it show empty in console 

console.log(gameName.length); // to cheak the length of the string

console.log(gameName.toUpperCase()); // it will transform the string into uppercase
// note: but will not change the original string

console.log(gameName.charAt(4));  // used to cheack at what index is the prticular character

console.log(gameName.indexOf('t')); // check where is the character

// substring
const newString = gameName.substring(0, 4);
console.log(newString);

// slicing
const anotherString = gameName.slice(-9, 4);
console.log(anotherString);

// trim
const newStringName =  "   Rajat    "
console.log(newStringName);
console.log(newStringName.trim());

// replace
const url = "https://rajat.com/rajat%20malapur";

console.log(url.replace('%20', '-'));

// includes

console.log(url.includes('rajag'));

// split 
const Email = "rajat-malapur-@-gmaill.com"
console.log(Email.split('-'));
