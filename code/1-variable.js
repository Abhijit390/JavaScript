/*
It's not prefer to used var keyword
beacuse get issue in scope and function block
*/
//line ends with semicolon is good but if you forget to put semicolon then also program run fines

const accountId = 31458045784;
let accountEmail = 'afirke1@gmail.com';
var accountPwd = 45673289
accountCity = "Mumbai"
let accountState;

console.log(accountId,accountEmail,accountPwd,accountCity,accountState);

accountEmail = 'firke32@gmail.com';
accountPwd = 231212121
accountCity = 'Delhi'

//variable put in table always used in [ ] braces
console.table([accountId,accountEmail,accountPwd,accountCity]);
