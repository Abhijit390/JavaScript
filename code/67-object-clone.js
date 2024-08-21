// clone using Object.assign 

//obj and obj1 both objects point towards obj so whenever changes occured in obj then obj1 also changes

// So Only change in obj not obj1 then following methods are used

const obj = {
    key1: "value1",
    key2: "value2"
}

// const obj2 = obj;
// obj.key3 = "value3";

//Method 1: Using spread operator 
// const obj2 = {...obj};

//Method 2 : Using Object.assign();
const obj2 = Object.assign({key4: "value4" }, obj);
obj.key3 = "value3";


console.log(obj);
console.log(obj2);