//call methods
//Notes: With the call() method, you can write a method that can be used on different objects.
//call function takes argument so executes the other function

// function hello(){
//     console.log("hello world");
// }
// hello.call(); //another way to call function
// hello();

const user1 = {
    firstName: "Abhijit",
    age: 12,
    about: function(){
        console.log(this.firstName, this.age);
    },
    about1: function(hobby, favMusician){
        console.log(this.firstName, this.age, hobby, favMusician);
    }
};

const user2 = {
    firstName: "mohit",
    age: 10
}

user1.about(); 
//o/p: Abhijit 12

user1.about.call(); 
// o/p: undefined undefined

// When user wants access other object's function then its simple function objectName.functionName.call(other object)
user1.about.call(user2);
// o/p: mohit 10

//By giving other parameter which not present in user2 object
user1.about1.call(user2);
// o/p: mohit 10 undefined undefined

user1.about1.call(user2, "violin");
// o/p: mohit 10 violin undefined

user1.about1.call(user2, "violin", "Midori");
// o/p: mohit 10 violin Midori