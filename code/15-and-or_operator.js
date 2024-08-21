// and or operator
// If user wants both condition becomes true the 'and' operator used
//If user wants alteat one condition is true the 'or' operator used 
let firstName = "Abhijit";
let age = 14;


// AND operator
if(firstName[0] === "A" && age<18){
    console.log("Name starts with A and age is 18");
}else{
    console.log("inside else");
}

//OR operator
if (firstName[0] === "S" || age > 18 ) {
    console.log("Name starts with A");
} else {
    console.log("inside else for or operator");
}