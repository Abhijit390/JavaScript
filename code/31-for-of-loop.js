// for of loop in array

const car = ["bmw","tata","nissan"];
const newCars = [];

for (let newCar of car) {
   console.log(newCar); 
   newCars.push(newCar.toUpperCase());
}

console.log(newCars);