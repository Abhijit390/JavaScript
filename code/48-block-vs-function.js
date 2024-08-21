// block scope vs function scope

// let and const are block scope but out of block can't use if we do that then program get error
// var is function scope

// if(true){
//     var firstName = "harshit";
//     console.log(firstName);
// }

// console.log(firstName);
let firstName = "Anagha";
function myApp(){
    if(true){
        let firstName = "harshit";
        console.log(firstName);
    }

    if(true){
        console.log(firstName);
    }
    console.log(firstName);
}

myApp();