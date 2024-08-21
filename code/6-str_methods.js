// trim() //it does not count spaces between words
// toUpperCase() //convert all letters to Uppercase
// toLowerCase() //convert all letters to Lowercase
// slice() // start with specific index position of word

let firstName = "abhijit        ";

console.log(firstName.length);
firstName = firstName.trim(); // "Abhijit"
console.log(firstName);
console.log(firstName.length);
// firstName = firstName.toUpperCase();
// firstName = firstName.toLowerCase();
// console.log(firstName);

// start index 
// end index

let newString = firstName.slice(1); // hars
console.log(newString);