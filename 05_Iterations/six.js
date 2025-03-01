// FILTERS 

const coding = ["js", "ruby", "java", "python", "cpp"];

// const values = coding.forEach( (item) => {
//     console.log(item);
//     return item;
// } )

// console.log(values);

// --------------------1st method --------------------

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNums = myNums.filter( (num) => {     // if using {} -> then use return keyword
//     return num > 4;
// });


// --------------------2nd method --------------------
const newNums = [];

// myNums.forEach( (num) => {
//     if(nums > 4){
//         newNums.push(num);
//     }
// })

// console.log(newNums);

// you will get same like this data from the databases
const books = [
    { title: 'Book One', genre: 'Fiction', public:1981, edition: 2004},
    { title: 'Book Two', genre: 'Non Fiction', public:1992, edition: 2008},
    { title: 'Book Three', genre: 'History', public:1999, edition: 2007},
    { title: 'Book Four', genre: 'Non Fiction', public:1989, edition: 2010},
    { title: 'Book Five', genre: 'History', public:2009, edition: 2014},
    { title: 'Book Six', genre: 'Fiction', public:1987, edition: 2010},
    { title: 'Book Seven', genre: 'History', public:1986, edition: 1996},
    { title: 'Book Eight', genre: 'Science', public: 2011   , edition: 2016},
    { title: 'Book Nine', genre: 'Non Fiction', public:1981, edition: 1998},
];

let userBooks = books.filter( (bk) => bk.genre === 'History');

userBooks = books.filter( (bk) => {
    return bk.public >= 2000 && bk.genre === "History";
})

console.log(userBooks);
