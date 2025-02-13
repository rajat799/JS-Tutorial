// singleton

// object literals

const mySym = Symbol("key1");   // using symbol in objects

const JsUser = {   // declaration of the objects
    name: "rajat",
    "full name":"rajat malapur",  // cannot be accessed using . 
    age: 20,
    [mySym]: "mykey1",  // symbol
    location: "sangli",
    email: "rajat@gmail.com",
    isLoggedIn: false,
    lastLogginDays: ["monday", "wednesday", "sunday"]
}

// accessing the objects
console.log(JsUser.name); // method 1

console.log(JsUser["name"]); // method 2  note: bydefault objects elements are as string ie name, age etc

console.log(JsUser["full name"]);

// console.log(typeof JsUser.mySym);

console.log(JsUser[mySym]);  // correct way to access symbol from the object


JsUser.email = "malapur@gmail.com";

console.log(JsUser.email);


// freez the object: to not to change or modify the value of obj

// Object.freeze(JsUser);

JsUser.name = "rakat";

console.log(JsUser.name);


console.log("------------ functions in obj ---------------");


// using functions with objects

JsUser.greetings = function(){
    console.log("hello Js users!");
    
}

JsUser.greetingsTwo = function(){
    console.log(`hello Js users!, ${this.name}`);
    
}

console.log(JsUser.greetings());
console.log(JsUser.greetingsTwo());
