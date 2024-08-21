// for in loop in array

const car = ["bmw","tata","nissan"];
const newCars = [];

for (const key in car) {
    console.log(car[key]);
    newCars.push(car[key].toUpperCase());
}

console.log(newCars);