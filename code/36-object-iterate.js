// how to iterate object 

const person = {
    firstName:"Abhijit",
    lastName:"Firke",
    age:34,
    hobbies: ["guitar","playing cricket","tekking"]
};

//for in loop

for (let key in person) {
    // we want only value
   // console.log(person[key]);

   //when user wants key and value then 2 types to iterate
   //1-Using template string
   //console.log(`${key} : ${person[key]}`);

   //2-normal string format
   console.log(key, ": ", person[key]);
}

console.log(Object.keys(person));

let var1 = Array.isArray(Object.keys(person));
console.log(var1);
console.log("\n\n\nInitiating For Of Loop\n\n");
for (let key of Object.keys(person)) {
    console.log(key);  //gives only key name
    console.log(person[key]); // gives both key and value pair
}
