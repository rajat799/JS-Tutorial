// scope in js

/*
{
    this is the scope 
}
*/

var c = 300;    // this is globle scope

if(true){         // this is block scope 
    let a = 10;
    const b = 20;
    var c = 30;
}

// console.log(a);   let and const will not print it will show error 
// console.log(b);
// console.log(c);    // var variable will print outside the scope also



// difference between block and globle scope 
let sco = 111;

if (true) {
    let sco = 333;
    // console.log("Inner: " ,sco);  // it will print block scope 
    
}

// console.log("Outer: ",sco);   // it will print globle scope


// Video no 22 ---> Scope level and mini hoisting

function one(){
    const username = "Rajat";

    function two(){
        const website = "youtube";
        // console.log(website);
        
        // console.log(username);
        
    }
    // console.log(website); // it is out of the func 2 scope ::: error
    
    two();
}


one();


// if else example

if (true) {
    const username = "hitesh";
    if(username === "hitesh"){
        const website = " youtube";
        // console.log(username + website);
        
    }
    // console.log(website);
    
}
// console.log(username);


// +++++++++++++++++++++++++++++++ Interesting concept ++++++++++++++++++++++


console.log(addOne(5));  // this can print value before declaration also
function addOne(num){
    return num + 1;
}


console.log(addTwo(5));  // this cannot print because the variable is declared after this line

const addTwo = function(num){
    return num + 2;
}

