// Array every() method
//Checks if every element in an array meets a condition. Returns true only if all elements pass the test, otherwise false
const numbers = [2,4,6,9,10];

const ans = numbers.every(number => number%2===0);
console.log(ans);

//to check usercart item price is less than 30000 rs
const userCart = [
    {productId: 1, productName: "mobile", price: 12000},
    {productId: 2, productName: "laptop", price: 22000},
    {productId: 3, productName: "tv", price: 35000},
]


const ans1 = userCart.every((cartItem)=>cartItem.price < 30000);
console.log(ans1);