// clone array

let arr1 = ["bmw","audi"];
//let arr2 = ["bmw","audi"];

//method 1 performance wise this method is effective
//let arr2 = arr1.slice(0);

//method 2
//let arr2 = [].concat(arr1);

// method 3 spread operator
//let arr2 = [...arr1];

//if we want clone of array with add some element
//let arr2 = arr1.slice(0).concat(["tata","mahindra"]);
//let arr2 = [].concat(arr1,["tata","mahindra"]);
//let arr2 = [...arr1, "tata", "mahindra"];

let arr3 = ["tata","mahindra"];
//If we want clone of two array shows below
let arr2 = [...arr1, ...arr3]; 
arr1.push("tata");

console.log(arr1===arr2);
console.log(arr1);
console.log(arr2);