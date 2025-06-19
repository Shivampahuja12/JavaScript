// let score = undefined;       // "33abc"

// console.log(typeof score);
// score = Number(score);  // "33abc" will be converted into a number but if we try to print the value it will print NaN(not a number)
// console.log(typeof score);
// console.log(score);

/* 
    "33" easily converts to 33.
    "33abc" - NaN but type of NaN is number.
    printing null after converting to the number is 0.
    printing undefined after converting to the number is NaN.
    printing true after converting to the number is 1.
    printing false after converting to the number is 0.

*/

let isLoggedIn = "Shivam";    // 1
console.log(typeof isLoggedIn);
let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(typeof booleanIsLoggedIn);
console.log(booleanIsLoggedIn);

/* 
    BOOLEAN CONVERSION:
    converting 1 to boolean is true;
    converting 0 to boolean is false;
    converting "" to boolean is false;
    converting "Shivam" to boolean is true;
    converting any interger other than 0 to boolean is true;

*/