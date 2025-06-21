/* 
    IN COMPARISON THE RESULT BE ALWAYS IN BOOLEAN - true/false.

*/

// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 <= 1);
// console.log(2 == 1);
// console.log(2 != 1);
// console.log(2 === 1);


// js don't recommend to compare two different datatypes
// console.log("2" > 1);    // true
// console.log("02" > 1);   // true


// these types of convertions always confuses.
// console.log(null > 0);  // false 
// console.log(null == 0); // false
// console.log(null >= 0); // true 
// The reason is that an equality check == and comparisons > < >= <= work differently. Comparisons convert null to a number, treating it as 0. That’s why (3) null >= 0 is true and (1) null > 0 is false.
// On the other hand, the equality check == for undefined and null is defined such that, without any conversions, they equal each other and don’t equal anything else. That’s why (2) null == 0 is false.


// these types of convertions always confuses.
// console.log(undefined == 0);    // false
// console.log(undefined > 0);     // false
// console.log(undefined < 0);     // false
/* 
    Comparisons (1) and (2) return false because    undefined gets converted to NaN and NaN is a   special numeric value which returns false for     all comparisons.
    The equality check (3) returns false because    undefined only equals null, undefined, and no  other value. 
*/


/* 
    A strict equality operator === checks the equality without type conversion.
    In other words, if a and b are of different types, then a === b immediately returns false without an attempt to convert them.
*/

// console.log(0 === false); // false
// console.log(null === undefined); // false
// console.log(null == undefined); // true


// console.log("2" == 2);
// console.log("2" === 2);

/* 
    What will be the result for these expressions?

    5 > 4  // true
    "apple" > "pineapple"  // false
    "2" > "12"  // true
    undefined == null   // true
    undefined === null  // false
    null == "\n0\n"   // false
    null === +"\n0\n"   // false

*/