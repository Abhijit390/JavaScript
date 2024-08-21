// map method
//map() creates a new array from calling a function for every array element.
//map() does not execute the function for empty elements.
//map() does not change the original array.
//Note: function return defaults value is undefined, so always return key while using map function

const numbers = [3,4,7,1,9];

/*const square = function(numbers){
    //console.log(numbers * numbers); // step 1
    // o/p : 9 16 49 1 81
    return numbers * numbers; // step 2
}*/

//Method 1
/*const squareNumber = numbers.map(square);
console.log(squareNumber); */

// step 1 o/p: [undefined, undefined, undefined, undefined, undefined]
// step 2 o/p: [9, 16, 49, 1, 81]

//Method 2
// const squareNumbers = numbers.map(numbers => {
//     return numbers * numbers;
// });

// const squareNumbers = numbers.map((numbers, index) => {
//     return `index: ${index}, ${numbers * numbers}`;
// });

// console.log(squareNumbers);
// o/p: ['index: 0, 9', 'index: 1, 16', 'index: 2, 49', 'index: 3, 1', 'index: 4, 81']

const users = [
    {firstName: "Abhijit", age: 34},
    {firstName: "Anagha", age: 28},
    {firstName: "Pallavi", age: 36},
    {firstName: "Gunjan", age: 11},
    {firstName: "Keyuri", age: 8},
]

const userNames = users.map(user => {
    return user.firstName;
})

console.log(userNames);
// o/p: ['Abhijit', 'Anagha', 'Pallavi', 'Gunjan', 'Keyuri']