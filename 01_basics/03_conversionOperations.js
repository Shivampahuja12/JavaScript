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

// let isLoggedIn = "Shivam";    // 1
// console.log(typeof isLoggedIn);
// let booleanIsLoggedIn = Boolean(isLoggedIn);
// console.log(typeof booleanIsLoggedIn);
// console.log(booleanIsLoggedIn);

/* 
    BOOLEAN CONVERSION:
    converting 1 to boolean is true;
    converting 0 to boolean is false;
    converting "" to boolean is false;
    converting "Shivam" to boolean is true;
    converting any interger other than 0 to boolean is true;

*/



// *********************  Operations  ******************************

// let value = 3;
// let negValue = -value;
// console.log(negValue);


// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);


// let s1 = "Hello";
// let s2 = " shivam";
// let s3 = s1 + s2;        // to concatenate two strings
// console.log(s3);

// console.log("1" + 2);   // 12
// console.log(1 + "2");   // 12
// console.log("1" +2 + 2);    // in this operation 1 is a string therefore it there the other operations as string and concatentate them all = 122.
// console.log(1 +2 + "2");    // but in this example the first operation is addition therefore the result is the completion of first operation which is addition and then concatenation of string occurs = 32

// console.log(true); // true
// console.log(+true); // 1
// console.log(true+); // error
// console.log(+""); // 0
// console.log(""+); // error


// let n1, n2, n3;
// n1 = n2 = n3 = 4;
// console.table([n1, n2, n3]);

// let counter = 100;
// let ans1 = counter++;    // post increment
// let ans2 = ++counter;    // pre increment
// console.log(ans1); // 100
// console.log(ans2); // 102


