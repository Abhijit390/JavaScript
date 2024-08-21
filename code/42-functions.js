//function

function addnumber(){
    // console.log("Please enter two number for addition operation");
    return 3 + 1;
}

function sumTwoNumber(num1, num2){
    return num1 + num2;
}

console.log(addnumber());
let result = sumTwoNumber(6,7);
console.log(result);

// create function whether odd or even
function isEven(number) {
    // if(number % 2 === 0){
    //     return true;
    // }
    // return false;

    // or
    return number % 2 === 0;
}

console.log(isEven(6));

// create function return a character
function firstChar(str) {
    return str[4];
}

console.log("\n",firstChar("Anagha"));

//index of target if target number present in array 
function findNum(array, targetNum){
    for (let i = 0; i < array.length; i++) {
        if(array[i] === targetNum){
            return i;
        }        
    }
    return -1;
}

const myArray = [4,1,6,90,45];
const ans = findNum(myArray, 89);
console.log(ans);