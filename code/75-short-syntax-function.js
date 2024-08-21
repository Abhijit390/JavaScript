// Short syntax for function creates inside object
//Below two about methods in both objects are equivalent to each other
//Traditional method to create about function
// const user1 = {
//     firstName : "abhijit",
//     age: 8,
//     about: function(){
//         console.log(this.firstName, this.age);
//     }   
// }

//Short syntax of about
const user1 = {
    firstName : "abhijit",
    age: 8,
    about(){
        console.log(this.firstName, this.age);
    }   
}



user1.about();