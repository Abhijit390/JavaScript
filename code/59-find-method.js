//find method
//The find() method returns the value of the first element that passes a test.
//The find() method executes a function for each array element.
//The find() method returns 'undefined' if no elements are found.
//The find() method does not execute the function for empty elements.
//The find() method does not change the original array.


const myArray = ["cat", "lion", "tiger", "dog"];

// function isLength3(string) {
//     return string.length === 3;
// }

// const ans = isLength3("dog");
// console.log(ans);

// const ans = myArray.find(isLength3);
// console.log(ans);

//Using arrow function

// const ans = myArray.find(string => {
//     return string.length === 4;
// });

// console.log(ans);

const users = [
    {userId : 1, userName: "abhijit"},
    {userId : 2, userName: "anagha"},
    {userId : 3, userName: "keyuri"},
    {userId : 4, userName: "pallavi"},
    {userId : 5, userName: "aaditya"},
];

const findId = users.find(user => user.userId === 3);
console.log(findId);