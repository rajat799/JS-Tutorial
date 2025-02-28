// forof loop

const arr = [1, 2, 3, 4, 5];

for (const num of arr){
    // console.log(num);
    
}

const greeting = "hello world";

for (const greet of greeting) {
    // console.log(greet);
}

// Maps (values should be unique and in order)

const map = new Map();
map.set('IN', 'India');
map.set('USA', 'United states of amarica');
map.set('FR', 'France');
map.set('IN', 'India');

// console.log(map);

for (const [key, value] of map) {
    // console.log(key, ':-', value);
    
}


const myObject = {                  // note: objects are not iteratable using for of
    'game1' : 'Valorant',
    'game2' : 'gta5'
}

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
// }