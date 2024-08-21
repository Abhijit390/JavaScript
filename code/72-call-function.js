//call method
//more simplify previous program

function about(hobby, favMusician){
    console.log(this.firstName, this.age, hobby, favMusician);
};

const user1 = {
    firstName: "Abhijit",
    age: 12,
}

const user2 = {
    firstName: "mohit",
    age: 10
}
about.call(user1, "cricket", "Virat Kohli");
// o/p: Abhijit 12 cricket Virat Kohli

about.call(user2,undefined,"Sachin Tendulkar");
// o/p: mohit 10 undefined Sachin Tendulkar

//apply 
// same as call method but little difference is call takes separate agruments but apply method takes arguments in the form of array
console.log("Apply Method");
about.apply(user1,["cricket","Rohit Sharma"]); 
// o/p: Abhijit 12 cricket Rohit Sharma

//bind
//The bind() method allows an object to borrow a method from another object without copying.

const func = about.bind(user2,"cricket","Rohit Sharma");
func();
// o/p: mohit 10 cricket Rohit Sharma