const userMethods = {
    about : function(){
        return `${this.firstName} is ${this.age} years old.`;
    },
    is18 : function(){
        return this.age >= 18;
    },
    sing: function(){
        return 'toon na na na la la ';
    }
}
function createUser(firstName, lastName, email, age, address){
    const user = Object.create(userMethods);
    //Object.create method creates empty object as well as chaining the property of another methods like "userMethods" user using "__proto__".. In simple words "proto" is reference of userMethods that is why we directly accessing its property.
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address;
    return user;
}

const user1 = createUser('abhijit', 'vashsith', 'harshit@gmail.com', 9, "my address");
const user2 = createUser('anagha', 'vashsith', 'harshit@gmail.com', 19, "my address");
const user3 = createUser('mohit', 'vashsitha', 'harshit@gmail.com', 17, "my address");
console.log(user1);
// o/p: {firstName: 'harshit', lastName: 'vashsith', email: 'harshit@gmail.com', age: 9, address: 'my address'}

console.log(user1.about());
// o/p: abhijit is 9 years old.

console.log(user3.sing());
// o/p: toon na na na la la