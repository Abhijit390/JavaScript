function hello(){
    console.log("Inside hello function");
    console.log("Hello World!");
}

//hello();

// name property ---> tells function name;
//console.log(hello.name);

//In javascript function is used or treat as function as well as object
// function ===> function + object

// You can add your own property.
hello.myOwnProperty = "unique value";
console.log(hello.myOwnProperty);
// o/p: unique value 

//Other useful method

hello.prototype.abc = "abc";
hello.prototype.xyz = "xyz";
hello.prototype.sing = function(){
    return "lalalla";
};
console.log(hello.prototype.sing());

