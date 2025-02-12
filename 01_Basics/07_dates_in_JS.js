// Dates

let Mydate = new Date();

console.log(typeof Mydate);


// console.log(Mydate);
// console.log(Mydate.toString());

// console.log(Mydate.toDateString());

// console.log(Mydate.toLocaleString());

// console.log(Mydate.toLocaleDateString());

// console.log(Mydate.toISOString());

// console.log(Mydate.toJSON());

// NOTE: in JS month index starts from 0
// let myCreatedDate = new Date(2024, 0, 20);  
// let myCreatedDate = new Date(2024, 0, 20, 5, 3);
// let myCreatedDate = new Date("2023-02-15");

let myCreatedDate = new Date("01-14-2023");  //indian standards

// console.log(myCreatedDate);
// console.log(myCreatedDate.toDateString());

// console.log(myCreatedDate.toLocaleString());


//timestamps 

let myTimeStamp = Date.now();
// value will be in milli sec

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now() / 1000));


let newDate = new Date();

console.log(newDate.getDay() + 1);

console.log(newDate.getFullYear());


newDate.toLocaleString('default', {
    weekday:"long",
})

console.log(newDate.toLocaleString());