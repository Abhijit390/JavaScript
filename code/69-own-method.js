//methods
//function inside object
//1- If you use function inside object and you can print object key-value pair then you can always used 'this' keyword.Without 'this' keyword you won't access object key-value pair 
const person = {
    firstName: "Abhijit",
    age: 14,
    about: function(){
        //console.log("Person name is Abhijit and person age is 14");
        // without this keyword error
        //Uncaught ReferenceError: firstName is not defined
        console.log(`Person Name is ${this.firstName} and person age is ${this.age}`);

    }
};

//person.about();

//But function inside object lot of confusion to read the code so we can create separate function so easy to understand and readable
function personalInfo(){
    console.log(`Person Name is ${this.firstName} and person age is ${this.age}`)
};

const person1 = {
    firstName: "Abhijit",
    age: 14,
    about: personalInfo
};

const person2 = {
    firstName: "Anagha",
    age: 15,
    about: personalInfo
};

const person3 = {
    firstName: "James",
    age: 13,
    about: personalInfo
};


person1.about();
person2.about();
person3.about();

//But when you call only personalInfo function then ouput: Person Name is undefined and person age is undefined

personalInfo();