
//arrays

const Arr = [0, 1, 2, 3, 4, true, "rajat"];

const myArr = [0, 1, 2, 3, 4, 5];
// console.log(myArr);

// const newArr = new Array(1, 2, 3, 4, 5);
// console.log(newArr[3]);


// array methods

// myArr.push(8);   // push: adds element in array at last
// myArr.push(9); 
// console.log(myArr);

// myArr.pop();   // pop: removes last elenment in array
// console.log(myArr);

// myArr.unshift(5);   // unshift: adds an element at start of the array
// console.log(myArr);

// myArr.shift();   // shift: removes first elenment in array


// console.log(myArr.includes(5)); // checks if the para is present in the array or not returns t/f 

// console.log(myArr.indexOf(7)); // if elem not present it returns -1

//join : it binds and converts the array into string 
// const  newArr = myArr.join();
// console.log(myArr);
// console.log(newArr);


//slice and splice

// slice: does not include last value (and orgininal array remains same)
// splice: include last value (and orginial value get chaged and removes elem in original array)

console.log("original arr: ", myArr);

const myn1 = myArr.slice(1, 3); // slice
 
console.log(myn1);  
console.log("Slice arr: ", myArr);

  
const myn2 = myArr.splice(1, 3); // splice
console.log("Splice arr: ", myArr);

console.log(myn2);  
