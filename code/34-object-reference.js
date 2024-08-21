// objects reference type  
// arrays are good but not sufficient for real world data  
// objects store key value pairs 
// objects don't have index

// how to create objects 
const person = {
    firstName:"Abhijit",
    lastName:"Firke",
    age:34,
    hobbies: ["guitar","playing cricket","listening music"]
};
console.log(person);

console.log(person.hobbies);

// how to add key value pair to objects
person.gender="Male";        //method 1
person["Country"]="India";   //method 2
console.log(person);