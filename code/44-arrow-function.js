// arrow function

/* console.log(isEven(5)); 
if above line declare before the function body then error is
ReferenceError: Cannot access 'isEven' before initialization

so avoid these type error then always first initialize function body after that declare function
*/

// Note: If single parameter pass then you write single parameter without any angular braces
// syntax: const functionName = parameter => {}
const isEven = number => {
    return number % 2 === 0;
}

console.log(isEven(6));

const isOdd = number1 => number1 % 2 != 0;
console.log(isOdd(4));


const addNum = (num1, num2, num3) => {
    return num1 + num2 + num3;
}

console.log(addNum(45,2,6));