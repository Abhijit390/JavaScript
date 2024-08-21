// for loop
//print number 0 to 9

// for (let i = 0; i <= 9; i++) {
//    console.log(i);
// }

//If I want to access value of i outside for loop then 'let' keyboard is not useful that we have to used 'var' keyboard.

// for (var i = 0; i <= 9; i++) {
//     console.log(i);    
// }
// console.log("Value of i is",i);

//we can also declare for loop below that but recommand syntax is above first for loop
// let i = 0
// for (; i <= 9; i++) {
//     console.log(i);
//  }
//  console.log("Total number is",i);


// addition of numbers
let num = 10, total = 0;
for (let i = 0; i <= num; i++) {
    total = total + i;
}
console.log("Total sum of addition", total);