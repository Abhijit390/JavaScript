// array destructuring 
//it means we created new variable as per requirement
const myArray = ["value1", "value2", "value3","value4"];
// let myvar1 = myArray[0];
// let myvar2 = myArray[1];
// console.log("value of myvar1", myvar1);
// console.log("value of myvar2", myvar2);

//Using below line we can write this line and then this variable myvar1, myvar2 used as separate varibale and also change the value but when it is declared as let or var keyword. const variable can't change its value
// if array has single element and we have declared two variable then second variable output is undefined
let [myvar1, myvar2, ...myNewArray] = myArray;
console.log("value of myvar1", myvar1);
console.log("value of myvar2", myvar2);
console.log(myNewArray);

// User wants skip second element of array then just blank space with comma then output shows as per user wants
let [myvar3, ,myvar4] = myArray;
console.log("value of myvar1", myvar3);
console.log("value of myvar2", myvar4);