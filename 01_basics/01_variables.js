/* 
    const - it is a keyword whose value doesn't change after assigning.

    Prefer not to use var - because of issue in block scope and functional scope
*/

const accountId = 1230;
let accountEmail = "shivampahuja@google.com";
var accountPassword = "12345";
accountCity = "Rajpura";    // this is not in good practice
let accountState;   // this variable is declared but doesn't have any value till now so the output of this variable will be undefined.

// accountId = 12345;   // this is not allowed
accountEmail = "pahuja@google.com";
accountPassword = "1231";
accountCity = "Bengaluru";

// console.log(accountEmail);
// console.log(accountPassword);
// console.log(accountCity);
// Instead of doing this we can use
console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);  // this prints data in a tabular form.
