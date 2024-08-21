const userMethods1 = {
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
   //1- 
   const user = Object.create(userMethods1);
   //2- const user = Object.create(createUser.prototype);// {}
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address;
    return user;
}

createUser.prototype.about = function(){
    return `${this.firstName} is ${this.age} years old `;
}

createUser.prototype.is18 = function(){
    return this.age >= 18;
}

createUser.prototype.sing = function(){
    return "Hum dil de chuke sanam";
}

const user11 = createUser("abhijit","sharma","abhijit@gmail.com", 14, "address");
const user22 = createUser('harsh', 'vashsith', 'harshit@gmail.com', 19, "my address");
const user33 = createUser('mohit', 'vashsitha', 'harshit@gmail.com', 17, "Home address");
console.log(user1);
console.log(user1.sing());
console.log(user2.is18());

//Key to Remenber

//Some methods are not available is main object then this method value is finding using "(Object.create(protoName methods)). Please refer 1- point in user object

//Some methods are not available is main object then this method value is finding using "(Object.create(prototype methods)). Please refer 2- point in user object

// But in 2 point We have to set protovalue in the form proto like (Object.create(createUser.prototype)) 

//In simple word javascript is not find any value or methods then it is cheked in proto i.e. using Object.create(methodName).