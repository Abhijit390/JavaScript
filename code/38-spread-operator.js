// spread operator

// const array1 = [1, 2, 3];
// const array2 = [5, 6, 7];

//We can concanate two array and also add some array element and then spread element using '...' before array variable
//const newArr = [...array1, ...array2, 34, 12];
//console.log(newArr); //o/p- [1, 2, 3, 5, 6, 7, 34, 12]

//We can sperate array string element just placed '...' before array string variable
//const newArr = [..."1234567"];
//console.log(newArr); // o/p-  ['1', '2', '3', '4', '5', '6', '7']

const obj1 = {
    key1 : "value1",
    key2 : "value2",
};

const obj2 = {
    key1 : "uniqueValue",
    key3 : "value3",
    key4 : "value4",
};

//Note 1: When two same key declared in separate object variable then using spread operator which object variable use as second object that key value will be displayed.


//const newObject = { ...obj2, ...obj1, key69: "value69" }; 
// output: {key1: 'value1', key3: 'value3', key4: 'value4', key2: 'value2', key69: 'value69'}

//Note 2: You can add new array element in this way also
//const newObject = { ...["item1", "item2"] };
// output: {0: 'item1', 1: 'item2'}

//Note 3: If add string value in blank array using following way then using spread operator this string value sperate from each other and also get to know character position.
const newObject = { ..."abcdefghijklmnopqrstuvwxyz" };
//output: {0: 'a', 1: 'b', 2: 'c', 3: 'd', 4: 'e', 5: 'f', 6: 'g', 7: 'h', 8: 'i', 9: 'j', 10: 'k', 11: 'l', 12: 'm', 13: 'n', 14: 'o', 15: 'p', 16: 'q', 17: 'r', 18: 's', 19: 't', 20: 'u', 21: 'v', 22: 'w', 23: 'x', 24: 'y', 25: 'z'}

console.log(newObject); 