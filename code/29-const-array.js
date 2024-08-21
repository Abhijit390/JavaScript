// const for creating array
// heap memory ["apple", "mango"] 0x11

const fruits = ["apple", "mango"]; // 0x11

// we can only push operation to add element without changing array address but when we declare new array using same const variable then program won't run
//fruits = ["watermelon", "gragonfruit"];
// Uncaught TypeError: Assignment to constant variable

fruits.push("banana");
console.log(fruits);


//When array becomes const element only you can add or remove then you can used array as a constant variable so no one can change like new blank array