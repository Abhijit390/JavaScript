// array push pop 

// array shift unshift 

let fruits = ["apple", "mango", "grapes"];
console.log(fruits);

// push to add element from last side of array
fruits.push("banana");
console.log(fruits);

// pop to remove last element from array and return that element
let poppedFruit = fruits.pop();
console.log(fruits);
console.log("popped fruits is", poppedFruit);

// unshift to add element on first position of array
// fruits.unshift("banana");
// fruits.unshift("myfruit");
// console.log(fruits);

// shift to remove first element from array
// let removedFruit = fruits.shift();
// console.log(fruits);
// console.log("removed fruits is ", removedFruit);

//Note: push/pop more faster than shift/unshift in terms of result