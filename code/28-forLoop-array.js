//for loop array

let cars = ["bmw","tata","audi","maruti"];

//finds array length
// console.log(cars.length);

// get specific array element
// console.log(cars[cars.length-2]);

//print array all element
//all array element copy in another array
let car = [];
for (let i = 0; i < cars.length; i++) {
    console.log(cars[i].toUpperCase());
    car.push(cars[i].toUpperCase());
}

console.log(car);