// objects inside array 
// very useful in real world applications

const users = [
    {userId: 1,firstName: 'anagha', gender: 'female'},
    {userId: 2,firstName: 'abhijit', gender: 'male'},
    {userId: 3,firstName: 'nitish', gender: 'male'},
]

for(let user of users){
    console.log(user.firstName);
}