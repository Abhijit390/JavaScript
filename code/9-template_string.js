//Template string
let firstName = "Abhijit";
let lastName = "Firke";
let age = "34";

//This way write but there is lot of double qoutes with plus sign are used so that is why we used template string
let aboutME = "My name is " + firstName + " " + lastName + " and my age is " + age;
console.log(aboutME);

//in tempalte string we used back sticks symbol which is loacted on above tab button (``) on keyborad
//Defined template string first used backsticks and in between we used format of strings alogside use variable like ${variable name}

let aboutMe = `My name is ${firstName} ${lastName}  and my age is ${age}`;
console.log(aboutMe);
