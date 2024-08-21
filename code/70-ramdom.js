//If you use 'this' or 'window' keyword in console.log the you can get windows object
//console.log(this);

"use strict"
function myFunc(){
    
    console.log(this);
}


// myfunc function gives windows object and myfunc function added in windows object
myFunc(); 

//It will create problems sometimes so avoid this problem , so use 'use strict' then o/p:'undefined'