// Sets (it is iterable)
// store data  
// sets also have its own methods
// No index-based access 
// Order is not guaranteed
// unique items only (no duplicates allowed)

const items = ['item1', 'item2', 'item3'];
const numbers = new Set();
numbers.add(1);
numbers.add(2);
numbers.add(3);
numbers.add(4);
numbers.add(5);
numbers.add(6);
numbers.add(2); //no duplicate allow
numbers.add(items);
numbers.add(items); //no duplicate allow
//numbers.add(["items1","items2"]); //add array
//console.log(numbers);

//to check element is present ot not
if (numbers.has(1)) {
    console.log("1 is present");
} else {
    console.log("1 is not present");
}

//To print sets elements

for (let number of numbers) {
    console.log(number);
}


//get unique key from array
//When we used array inside set then you can't findout its lenth beacuse complier gets 'undefined' result e.g. console.log(uniqueNum.lenght); o/p: undefined
const myArray = [1,2,4,4,5,6,5,6];
const uniqueNum = new Set(myArray);
console.log(uniqueNum);
console.log(myArray); //doesn't change array element


//get lenth of set
let length1 = 0;
for (let element of uniqueNum) {
    length1++;
}

console.log("\nLength of set of uniqueNum is ",length1);