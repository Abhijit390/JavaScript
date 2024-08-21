// rest parameters 

//Rest parameters in JavaScript allow a function to accept an indefinite number of arguments as an array. They are denoted by three dots (...) followed by a parameter name.

// function myFunc(a,b,...c){
//     console.log(`a is ${a}`);
//     console.log(`b is ${b}`);
//     console.log(`c is`, c);
// }

// myFunc(3,4,5,6,7,8,9);

function addAll(...numbers){
    let total = 0;
    for(let number of numbers){
        total = total + number;
    }
    return total;
}

const ans = addAll(4,5,4,2,10);
console.log(ans);

console.log(addAll(1,2,3,4,5,6,7,8,9,10));