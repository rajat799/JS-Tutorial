const myNums = [1, 2, 3];

// const myTotal = myNums.reduce(function (acc, currval){
//     console.log(`acc: ${acc} & currval: ${currval}`);
//     return acc + currval;
// }, 0); // note: 0 is initial value


// in arrow function
const myTotal = myNums.reduce( (acc, currval) => {
    return acc + currval;
}, 1)

// console.log(myTotal);


const shoppingCart = [
    {
        itemName: 'JS course',
        price: 2999
    },
    {
        itemName: 'python course',
        price: 1999
    },
    {
        itemName: 'mobiledev course',
        price: 5999
    },
    {
        itemName: 'data science course',
        price: 12999
    },
]


const pricetopay = shoppingCart.reduce( (acc, item) => acc + item.price, 0);

console.log(pricetopay);
