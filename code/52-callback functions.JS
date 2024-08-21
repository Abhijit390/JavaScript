// callback functions 
//A callback is a function passed as an argument to another function
//This technique allows a function to call another function
//A callback function can run after another function has finished

function myFunc2(name){
    console.log("inside my func 2")
    console.log(`your name is ${name}`);
}

function myFunc(callback){
    console.log("hello there I am a func and I can..")
    callback("abhijit");
}


myFunc(myFunc2);