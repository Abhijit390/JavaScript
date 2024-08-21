// default parameters 

//let us consider following scenario, if we pass only one parameter function then second parameter is undefined then output is NaN.

// function addTwo(a,b){
//     if(typeof b ==="undefined"){
//         b = 0;
//     }
//     return a+b;
// }

// console.log(addTwo(4));

function addTwo(a,b=0){
    return a+b;
}

const ans = addTwo(4, 8);
console.log(ans);