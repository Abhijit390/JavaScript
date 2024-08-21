// while loop in array

const car = ["bmw","tata","nissan"];
const newCar = [];
let i = 0;

while (i<car.length) {
    newCar.push(car[i].toUpperCase());
    i++;
}

console.log(newCar);