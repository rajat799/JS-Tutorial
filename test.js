const newarr = new Array(1, 2, 3, 4,5);

console.log(newarr);
newarr.push(6);

console.log(newarr);

const strarr = newarr.join();

console.log(typeof strarr);
console.log(strarr);


console.log(newarr);

const arr1 = newarr.splice(4)
console.log(newarr);

console.log(arr1);


const arr2 = newarr.slice(2)
console.log(newarr);

console.log(arr2);