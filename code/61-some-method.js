//some method
//The some() method checks if any array elements pass a test (provided as a callback function).
//The some() method executes the callback function once for each array element.
//The some() method returns true (and stops) if the function returns true for one of the array elements.
//The some() method returns false if the function returns false for all of the array elements.
//The some() method does not execute the function for empty array elements.
//The some() method does not change the original array.
// some methods is exactly opposite to every method

const numbers = [3,5,11,9,8];
//to check alteast single element is even

const ans = numbers.some(number => number%2===0);

console.log(ans);

const userCart = [
    {productId: 1, productName: "mobile", price: 12000},
    {productId: 2, productName: "laptop", price: 22000},
    {productId: 3, productName: "tv", price: 35000},
    {productId: 3, productName: "macbook", price: 250000},
]

const ans1 = userCart.some(user=>user.price > 100000);
console.log(ans1);