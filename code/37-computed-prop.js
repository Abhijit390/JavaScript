// computed properties

const key1 = "objKey1";
const key2 = "objKey2";

const value1 = "myValue1";
const value2 = "myValue2";

//Using Above value we have to create an object type
//When we are declare an object type then we have to declare key name within square variable only. we can get desired output
//method 1
const obj = {
    [key1] : value1,
    [key2] : value2
};
console.log(obj);

//method 2
const obj1 = {};

obj1[key1] = value1;
obj1[key2] = value2;
console.log(obj1);