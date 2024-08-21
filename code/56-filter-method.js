// filter methods

//The filter() method in JavaScript creates a new array with all elements that pass the test implemented by the provided function.

const numbers = [2,5,6,1,8,7];

// simple function
// function isEven(numbers){
//     return numbers % 2 === 0;
// }

// const evenNum = numbers.filter(isEven);
// console.log(evenNum); [2, 6, 8]

//Using arrow function
const oddNum = numbers.filter(number =>{
    return number % 2 !== 0;
});

console.log(oddNum);  // o/p:  [5, 1, 7]