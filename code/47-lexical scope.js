// lexical function
//the lexical scope is the scope of a variable or function based on where it is defined in the source code. The scope is determined by the placement of variables and functions in the code, and it remains the same throughout the execution of the program. Global variables can be accessed from anywhere within the program, while local variables can only be accessed within the function or block in which they are defined.

// Below example myVar variable ask in myFunc2 first this function their is present or not after that to check whether is it present in myFunc or not, then to check present in myApp or not then finally to check global variable is present or not
const myVar = "value1";
function myApp(){
    function myFunc(){

        const myVar = "value59";
        const myFunc2 = () =>{
            const myVar = "value69";
            console.log("inside myFunc", myVar);
        }
        myFunc2();
    }
    console.log(myVar);
    myFunc();
}

myApp();