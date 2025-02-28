const myObject = {
    js : 'javascript',
    cpp : 'c++',
    rb : 'ruby',
    swift: 'swift'
}

// applying loops on objects (forin loop)

for (const key in myObject) {
    // console.log(`${key} shortcut is for ${myObject[key]}`);
    
}

// for array

const programming = ["js", "rb", "py", "java", "cpp"];

for (const key in programming){
    // console.log(programming[key]);
    
}


// for map
const map = new Map();  // not iteratable
map.set('IN', 'India');
map.set('USA', 'United states of amarica');
map.set('FR', 'France');
map.set('IN', 'India');

// for (const key in map) {
//     console.log(key);
        
// }