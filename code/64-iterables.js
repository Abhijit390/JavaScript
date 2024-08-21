// iterables 
// string , array are iterable 

const firstName = "Abhijit";
for(let char of firstName){
    console.log(char);
}

const items = ['item1', 'item2', 'item3'];
for(let item of items){
    console.log(item);
}

//Iterables are iterable objects (like Arrays).
//Iterables can be accessed with simple and efficient code.
//Iterables can be iterated over with for..of loops

// array like object 
// which has length property, kind of array and string has length property, so by using length property user perform operation as per requirement
// by using legth property so we can access its index position
// example :- string 

const firstName1 = "harshit";
console.log(firstName1.length);
console.log(firstName1[2]);