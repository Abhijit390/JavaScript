const user1 = {
    firstName : "harshit",
    age: 8,
    about: function(){
        console.log(this.firstName, this.age);
    }   
}

// don't do this mistake 

// user1.about();

const myFunc = user1.about;
myFunc();
// o/p: undefined undefined
// Reason: myfunc take reference from about function so it is not binding with about function that is why output is undefined
const myFunc1 = user1.about.bind(user1);
myFunc1();
// o/p: harshit 8