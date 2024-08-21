// difference between dot and bracket notaion in object declaration

// when we declare two words with space then we used following method
const person = {
    name:"Abhijit",
    age: 34,
    "person hobbies": ["guitar","trekking","playing cricket"]
}

person["person mobile"] = "+91";

console.log(person["person hobbies"]);

const key = "email";
person[key]="afirke1@gmail.com";
console.log(person);