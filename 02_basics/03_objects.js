/* 
    there are two types of how to declare objects..

    1. Literal 
    2. Constructor 

    when we make object with constructor only then singleton object is made.

    object contains key and value pair
*/

// OBJECT LITERALS.

const mySym = Symbol("key1");
const jsUser = {
    name: "Shivam",
    [mySym]: "mykey1",    // here is access this symbol as this then the type of this will be string but if i access this as [mySym] then it will be works as symbol, check documentary.
    age: 19,
    location: "Rajpura",
    email: "shivampahuja@gmail.com",
    isLoggedIn: false,
    lastLogin: ["Monday", "Sunday"]
};  // this is object literal these {} is the object

// console.log(jsUser.email);
// console.log(jsUser["email"]);  // both the syntaxes are good but below one is correct
// console.log(jsUser[mySym]); // to access symbol.

// jsUser.email = "shivampahuja@google.com";
// Object.freeze(jsUser);  // freezes the object.
// jsUser.email = "shivampahuja@microsoft.com";
// console.log(jsUser);


jsUser.greeting = function(){
    console.log("Hello JS user");
}
jsUser.greeting2 = function(){
    console.log(`Hello JS user, ${this.name}`); // if we are accessing any key from the same object then we can use this property.
}
console.log(jsUser.greeting());
console.log(jsUser.greeting2());

