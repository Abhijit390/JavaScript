//reduce method

//The reduce() method in JavaScript is used to iterate over an array and accumulate a single value based on the elements in the array. It takes a callback function (called a reducer) and an optional initial value as arguments.

const numbers = [3,6,7,8,2,9,1];

// aim : sum of all the numbers in array 
// const sum = numbers.reduce((accumulator, currentValue)=>{
//     //console.log(accumulator, currentValue);
//             /* o/p: 3              6
//                     9              7
//                     16             8
//                     24             2
//                     26             9
//                     35             1
//     */
//     return accumulator + currentValue;
// });

// console.log(sum);

//example 2

const userCart = [
    {productId: 1, productName: "mobile", price: 10000},
    {productId: 2, productName: "laptop", price: 35000},
    {productId: 1, productName: "tv", price: 45000},
]

//arrow function declare two methods 
//Method 1

const totalAmount = userCart.reduce((totalPrize, product)=>{
    console.log(totalPrize, product.price);
    /* o/p: 0 10000
            10000 35000
            45000 45000
            90000
    */
    return totalPrize + product.price;
}, 0);

//arrow function declare two methods 
//Method 2
// const totalAmount = userCart.reduce((totalPrize, product) => totalPrize + product.price, 0);

console.log(totalAmount); 
// o/p: 90000