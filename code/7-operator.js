// typeof operator 

// data types (primitive data types)
// string "abhijit"
// number 2, 4, 5.6 
// booleans 
// undefined
// null 
// BigInt
// Symbol

let age = 22; 
let firstName = "abhijit";

console.log(typeof age);

// 22 -> "22"
// convert number to string.
age = age + "";
console.log(typeof(age)); //"22"


// convert string to number. 
//method 1
let myStr = +"34";
console.log(typeof myStr);

//method 2
let age1 = "18";
age1 = Number(age1);
console.log(typeof age1);
