const accountId = "Shivam"
let accountEmail = "Shivam@example.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountNumber;

/*
Prefer not to use var
because of issue in block scope and functional scope
*/
console.table([accountEmail, accountId, accountPassword, accountCity, accountNumber])