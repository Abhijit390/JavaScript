// optional chaining 
//It allows accessing properties on an object, that may or may not exist, with a compact syntax. It can be used with the ?.
//e.g user?.address?.houseNumber
const user  = {
    firstName: "harshit",
    // address: {houseNumber: '1234'}
}



console.log(user?.firstName);
console.log(user?.address?.houseNumber);