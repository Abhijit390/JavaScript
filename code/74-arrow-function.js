// arrow functions 

const user1 = {
    firstName : "harshit",
    age: 8,
    about: () => {
        console.log(this.firstName, this.age);
    }   
};
user1.about();
user1.about(user1);

//Note: Above two lines ouput are same i.e. (o/p: undefined undefined) because 'this' keyword refers window object not user object
//Whenever we used 'this' keyowrd inside arrow function then 'this' keyword has window object not that object we created