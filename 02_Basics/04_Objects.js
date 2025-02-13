// const tinderUser = new Object(); // singleton object

// const tinderUser = {}  // non singleton object

const tinderUser = {};

tinderUser.name = "Rajat";
tinderUser.age = 20;
tinderUser.isLoggedin = true;

// console.log(tinderUser);

// nested objects
const regularUser = {
    email: "rajat@gmail.com",
    fullName: {
        userFullName: {
            firstName: "rajat",
            lastName: "malapur"
        }
    }
}

console.log(regularUser.fullName.userFullName.firstName);


// mearging of 2 objects
const obj1 = {1:"a", 2:"b"};
const obj2 = {3:"c", 4:"d"};

// const obj3 = {obj1, obj2};  // prob: object ke andar object 

// const obj3 = Object.assign(obj1, obj2);
// const obj4 = Object.assign({}, obj1, obj2);

const obj3 = {...obj1, ...obj2};  // spread consept
console.log(obj3);
// console.log(obj4);

// imp
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));


console.log(tinderUser.hasOwnProperty('isLoggedin'));  // to check if the property is present of perticular object



