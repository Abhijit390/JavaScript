// important array methods 

const numbers = [4,2,6,7];

// function multiplyBy2(number, index) {
//     // console.log("Index is ",index);
//     // console.log(`${number}*2 = ${number*2}`);

//     console.log(`Index of ${index} number is ${number}`);
// }

//It gives only single index multiplication
// multiplyBy2(numbers[0], 0);
// multiplyBy2(numbers[1], 1);

//simple for loop display element
// for(let i = 0; i < numbers.length; i++){
//     //console.log(i);
//     multiplyBy2(numbers[i], i);
// }

// forEach loop to display array element
//numbers.forEach(multiplyBy2);

// create for-each with callback function with no return value
//Method 1
let result = 1;
// numbers.forEach(function(number, index){
    
//     console.log(`Index of ${index} and number is ${number}`);
//     console.log(result=result*number);
// });

// forEach function with return value
//Method 1

// function multiplyArr(numbers){
//     numbers.forEach(number=>{
//         result*=number;
//     });
//     return result;
// }

// console.log(multiplyArr(numbers));

const user = [
    {firstName: "Abhijit", age: 34},
    {firstName: "Anagha", age: 28},
    {firstName: "Pallavi", age: 36},
    {firstName: "Gunjan", age: 11},
    {firstName: "Keyuri", age: 8},
]

// user.forEach(function(user){
//     console.log(user.firstName);
// });


//Using arrow function
// user.forEach(user=>{
//     console.log(user.firstName);
// })

// If we want to display name with array index
user.forEach((users, index)=>{
    console.log(users.firstName, index);
});

// for (let users of user) {
//     console.log("\n",users.firstName);
// }

