
// const user = {
//      firstName: "Abhijit",
//      lastName: "Sharma",
//      email: "sharmabhijit@gmail.com",
//      age: 23,
//      address: "House Number, Colony, Pincode, State, Country",
//      about: function(){
//         return `${this.firstName} is ${this.age} years old`;
//      },
//      is18: function(){
//         return this.age >= 18;
//      }
// };

//Above object is create only single object but as per rquirement we have created mulitple object, so we want to create object format then while using this format we creates multiple object shown in below example

// function (that function create object)
// add key value pair 
// to return object 

function createUser(firstName, lastName, email, age, address){
    const user = {};
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address;
    user.about = function(){
        return `${this.firstName} is ${this.age} years old.`;
    };
    user.is18 =  function(){
        return this.age >= 18;
    }
    return user;
};

const user1 = createUser("Abhijit","Sharma","sharmabhijit@gmail.com", 28, "House Number, Colony, Pincode, State, Country");

console.log(user1);
// o/p: {firstName: 'Abhijit', lastName: 'Sharma', email: 'sharmabhijit@gmail.com', age: 8, address: 'House Number, Colony, Pincode, State, Country', ...}

const validAge = user1.is18();
console.log(validAge);
// o/p: true

const userAbt = user1.about();
console.log(userAbt);
// o/p: Abhijit is 28 years old.

//Note: This code is perfect but there is some problem for code readability purpose due to about and is18 methods are present in object so refer next program