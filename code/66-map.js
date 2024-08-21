// Maps
// map is an iterable
// store data in ordered fashion

// store key value pair (like object)
// duplicate keys are not allowed like objects

// different between maps and objects

// objects can only have string or symbol
// as key 

// in maps you can use anything as key
// like array, number, string 

// object literal 
// key -> string 
// key -> symbol

// const person = {
//     firstName : "harshit",
//     age: 7,
//     1:"one"
// }
// // console.log(person.firstName);
// // console.log(person["firstName"]);
// // console.log(person[1]);
// for(let key in person){
//     console.log(typeof key);
// }

// key value pair 

// const person = new Map();
// person.set('firstName','Abhijit');
// person.set('age', 34);
// person.set(1,'one');

//person.set([1,2,3],'onetwothree');
//person.set({1: 'one'},'onetwothree');
//console.log(person);
//console.log(person.get(1));
// for(let key of person.keys()){
//     console.log(key, typeof key);
// }
// for(let [key, value] of person){
//     // console.log(Array.isArray(key));
//     console.log(key, value)
// }

//Note: You can add array inside array in Map
// const person = new Map([['firstName', 'Anagha'],['age', 28]]);
// console.log(person);

//Note: 

const person1 = {
    id: 1,
    firstName: "Anagha"
};
const person2 = {
    id: 2,
    firstName: "Gunjan"
};

const updateInfo = new Map();
updateInfo.set(person1, {age: 28, gender: "female"});
updateInfo.set(person2, {age: 11, gender: "male"});
//console.log(updateInfo);

console.log(person1.id);
console.log(updateInfo.get(person1).gender);
console.log(updateInfo.get(person2).gender);


