//nested destructure

const user = [
    {userId: 1, firstName:"Abhijit", gender:"male"},
    {userId: 2, firstName:"Anagha", gender:"female"},
    {userId: 3, firstName:"Shruti", gender:"female"},
]

//console.log(user);
const[{firstName:user1Name, userId},,{gender:user3gender}]= user;
console.log(user1Name);
console.log(userId);
console.log(user3gender);