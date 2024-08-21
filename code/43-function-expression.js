// function expression

//function declaration vs function expression
//In function declaration, you can call function anywhere but in function expression you can call function after the defining the function

// function singHappyBirthday(){
//     console.log("happy birthday to you ......");
// }

//Above function is function declaration and below one is function expression

const singHappyBirthday = function(){
    console.log("happy birthday to you ......");
}
singHappyBirthday();

const isEven = function(number){
    return number % 2 === 0;
}

console.log(isEven(5));

const addNum = function(num1, num2, num3){
    return num1 + num2 + num3;
}

console.log(addNum(45,2,6));

const firstChar = function(anyString){
    return anyString[0];
}

console.log(firstChar("Abhijit"));


const targetPos = function(array, target){

    for (let i = 0; i < array.length; i++) {
       if(array[i] === target){
        return i;
       }
    }
    return -1;
}

const array = [4,6,8,45,78]
console.log(targetPos(array, 70));