/* 
    THERE ARE TWO TYPES OF DATATYPES ON THE BASIC OF ALLOCATION OF DATA AND ACCESS OF A DATA.

    ***  Js is a dynamically types language.  ***

    1. PRIMITIVE DATATYPES (CALL BY VALUE)
    7 types:
        - String, Number, Boolean, null, undefined, Symbol(to make the value unique), BigInt.

    2. NON-PRIMITIVE DATATYPES (REFERENCE TYPE)
        - Array, Objects, Functions.
*/

// primitive
// const score = 100;
// const scorevalue = 100.2;
// const isLoggedIn = false;
// const temperature = null;
// let userEmail = undefined; 

// const id = Symbol("123");
// const anotherId = Symbol("123");

// console.log(id === anotherId);  // false

const big = 45632146532146512n;     // with n in the ending the number becomes BigInt.
// console.log(typeof big);


// Non-primitive
// arrays, objects, functions
const heroes = ["shaktimaan", "hello"]
let myObject = {        // key value pair
    name: "Shivam",
    age: 19,
}


const myFunction = function(){
    console.log("Hello World!");
}

console.log(typeof big);
// typeof all the non primitive datatypes are object
// datatype of a function is an object function
/* 
    typeof undefined // "undefined"

    typeof 0 // "number"

    typeof 10n // "bigint"

    typeof true // "boolean"

    typeof "foo" // "string"

    typeof Symbol("id") // "symbol"

    typeof Math // "object"  (1)

    typeof null // "object"  (2)

    typeof alert // "function"  (3)
*/

