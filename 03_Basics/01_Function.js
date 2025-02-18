// console.log("R");
// console.log("A");
// console.log("J");


// Function

function sayMyName(){
    console.log("R");
    console.log("A");
    console.log("J");
}


// function reference 
// sayMyName


// console.log("printing by function");

// function call
// sayMyName();

/*
function addNum(number1, number2){  // number1 and number2 are parameters
    console.log(number1 + number2);
}

addNum(4, 5);  // 4 and 5 are arguments
addNum(4, "5");
addNum(4, null);
*/

function addNum(number1, number2){  // number1 and number2 are parameters
    let result = number1 + number2;
    return result;

}

const result = addNum(3, 4)
// console.log("Result: ", result);  // Note: result will be undefined if not returned in function


// string interpolation in function 
function loginUserMessage(username = "sam"){
    if(!username){
        console.log("please enter the username");
        return
        
    }
    return `${username} just logged in`;
}

// console.log(loginUserMessage("rajat")); // output: rajat just logged in
// console.log(loginUserMessage(""));  // output: just logged in
// console.log(loginUserMessage());   // output: undefined just logged in


// -----------------------------------------------------------------------------------------------
// next video: Function with objects


function calculateCartPrice(val1, val2, ...num1){   // ... rest operator
    return num1;   
}

// note: val1 and val2 is 2 and 3
// console.log(calculateCartPrice(2, 3, 5, 7));


const user = {
    username:"rajat",
    price:199
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
    
}

handleObject(user);
//direct object passing
handleObject({       
    username:"sam",
    price:399
});


const myNewArray = [20, 40, 50, 39];

function returnSecondNumber(getArray){
    return getArray[1];
}

console.log(returnSecondNumber(myNewArray));
