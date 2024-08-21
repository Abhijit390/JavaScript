// undefined 
// null
//If we used declare variable using 'var' and 'let' then program runs fines but we want declare 'const variable' then error rises because 'const variable' is always initalize the value
let firstName;
var lastName;
console.log(typeof firstName, typeof lastName);
firstName = "Abhijit";
lastName = "Firke";
console.log(typeof firstName, firstName);
console.log(typeof lastName, lastName);

let myVariable = null;
console.log(myVariable);
myVariable = "Abhijit";
console.log(typeof myVariable, myVariable);
 
//bug or error if we ask typeof null is show object value but actually object is another data type
console.log(typeof null);


//To Find max number of interger data type
console.log(Number.MAX_SAFE_INTEGER);

//BigInt
//following two methods we can declare BigInt
let myNum = BigInt(123);
let sameNum = 12n;
console.log(myNum + sameNum);
//console.log(myNum);

