//splice method
// start , delete , insert

//The splice() method adds and/or removes array elements.
//The splice() method overwrites the original array.

const myArray = ['item1', 'item2', 'item3'];

//delete or remove
const deletedItem = myArray.splice(1,1);
console.log(deletedItem);
console.log(myArray);

//insert
myArray.splice(1,0,"inserted item");
console.log(myArray);

// insert and delete 
const deletedItems = myArray.splice(1, 2, "inserted item1", "inserted item2")
console.log("deleted item", deletedItems);
console.log(myArray);