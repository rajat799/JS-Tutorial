// video no 23 --> this and arrow function in JS

const user = {
    username: "rajat",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website!`)
        console.log(this);
        
    }
}

// user.welcomeMessage();    // for this Rajat was the 1st context
// user.username = "sam";    // for the current context the username will be sam
// user.welcomeMessage();    // sam is 2nd context

// console.log(this);  // empty object


// running this in function
// function chai(){
//     let username = "Rajat";
//     console.log(this.username);  // we cant access the values using this in functions
    
// }

// chai();

//Arrow function

const chai = () => {
    let username = "Rajat";
    console.log(this);  
    
}

chai();


// example
const addTwo = (num1, num2) => {
    return num1 + num2;
}

console.log(addTwo(4, 5));


// implicite return (write function in one line)
const addTwos = (num1, num2) => num1 + num2;

console.log(addTwos(4, 5));


// Note: for writing arrow keyword
/*
    {} --> if curly braces then return keyword is must (explicite)
    () --> if parantheses then return is not used (implicite)
*/

const addTwoss = (num1, num2) => ({username:"Rajat"}); // undefined
