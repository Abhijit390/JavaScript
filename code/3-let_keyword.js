// var keyword
// if we want used var keyword twice with same variable name then program works perfectly without any error

/*
var firstName = "Abhijit";
var firstName = "Anagha";
console.log(firstName); 
*/

// let keyword
// If we want redeclared variable with let keyword then error is SyntaxError: Identifier 'firstName' has already been declared

/*
let firstName = "Abhijit";
let firstName = "Anagha";
console.log(firstName);
*/


//But we used single let keyword with changing variable value works fine

let firstName = "Abhijit";
firstName = "Anagha";
console.log(firstName);
       