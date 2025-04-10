const userName = new String("Rajat");

console.log(userName);

console.log(userName.toString());
console.log(userName.valueOf());
console.log(userName.length);
console.log(userName.toUpperCase())

console.log(userName.charAt(3))
console.log(userName.indexOf('at'));

// substring

const newString = userName.substring(0, 3);
console.log(newString);

//slice

const slicedStr = userName.slice(1, 3);
console.log(slicedStr);

// trim 
const myName = " Rajat  ";
console.log(myName);

console.log(myName.trim());

// replace 

const url = "https://rajat.com/rajat%20malapur";

console.log(url.replace("%20", "-"));

// includes 
console.log(url.includes("rajat"));

// SPLIT

const email = "rajat-malapur-@gmail-com";
console.log(email.split("-"))