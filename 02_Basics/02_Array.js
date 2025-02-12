const marval_heros = ["ironman", "Thor", "hulk"];
const dc_heros = ["batman", "superman", "flash"];

marval_heros.push(dc_heros);  //push 

// console.log(marval_heros);

// console.log(marval_heros[3][1])


const allHeros = marval_heros.concat(dc_heros) // concatination
// console.log(allHeros);


const allNewHeros = [...marval_heros, ...dc_heros] // spread same as concat
console.log(allNewHeros);

const anotherArr = [1, 2, 3, [4, 5, 6], 7, [6, 8, [3, 6]]];

const real_another_array = anotherArr.flat(2)  // 2 is depth of the array also can give ifinity also
console.log(real_another_array);

console.log(Array.isArray("Rajat"));
console.log(Array.from("Rajat"));  // converts para as array 

console.log(Array.from({name: "Rajat"})); // interesting


let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2));
