const obj1 = {
    key1: "value1",
    key2: "value2"
}

// const obj2 = {
//     key3: "value3"
// }

//console.log(obj2.key1);
// o/p: undefined

//To add more key-value pair in particular object
// obj2.key4 = "value4";
// console.log(obj2);


//We want to acess key-value pair from particular object while creating new object
const obj2 = Object.create(obj1);
console.log(obj2); 
// o/p: {} (empty array)
obj2.key3 = "value3";

//First to check key2 pair is available in obj2 after that to check in obj. It is available then it prints value because of by using "Object.create(object name)" method or not available also obj1 then it shows 'undefined'
//console.log(obj2.key2); // o/p: value2

console.log(obj2.__proto__);
// o/p: {key1: 'value1', key2: 'value2'}

// Working of proto: proto property set by using Object.create(objectName) then first to find property in created object(for e.g. obj2) e.g. by using obj2 = Object.create(objectName) and after that find property in 'objectName'