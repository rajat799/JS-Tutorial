// Immediately invoked fuction expression (IIFE)

function chai(){
    console.log("DB CONNECTED");
}
chai();

// iife syntax

(function chai(){
    console.log("DB CONNECTED");
})();

// note : when writing 2 function then end the function using ; for running the 2nd function

// arrow method in iife
( function aurcode() {
    console.log("DB CONNECTED TWO");
    
})();


// Note: What is iife function 
/*
    1) Function which executes immideatly 
    2) to stop the pollution created by globle scope[variables]  ---> imp
*/

// passing the value to function

( (name) => {
    console.log(`DB CONNECTED THREE ${name}`);
    
})('rajat')