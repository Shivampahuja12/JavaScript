

function sayMyName(){
    console.log("S");
    console.log("h");
    console.log("i");
    console.log("v");
    console.log("a");
    console.log("m");
    
}

// sayMyName()     // sayMyName - reference 
// sayMyName()     // sayMyName() - execute


// function addTwoNumbers(num1, num2) // parameters
// {
//     console.log( num1 + num2);
// }



function addTwoNumbers(num1, num2){
    return num1 + num2;
}


// addTwoNumbers(12,30);  //12, 30 are arguments
// console.log("\n");
// addTwoNumbers(4, null);

// const result = addTwoNumbers(4, 45);
// console.log("Result is: ", result);

// function loginUserMessage(username){
//     if (username === undefined){
//         return `Please enter a username`;
//     }
//     else {
//         return `${username} just logged in`;
//     }
// }


function loginUserMessage(username = "Shivam"){
    if (username === undefined){
        return `Please enter a username`;
    }
    else {
        return `${username} just logged in`;
    }
}


// console.log(loginUserMessage()); // undefined
// console.log(loginUserMessage("Harsh Pahuja")); // undefined
// console.log(loginUserMessage("")); // empty
// const result = loginUserMessage("Harsh Pahuja");
// console.log(result);


// console.log(loginUserMessage());
// console.log(loginUserMessage("Harsh"));



function calculateCartPrice(val1, val2, ...num){
    return num
}

// console.log(calculateCartPrice(3, 45, 467, 999, 89, 90));

const user = {
    username: "shivam",
    price: 199

}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}

// handleObject(user);
// handleObject({
//     username: "harsh",
//     price:1999
// });


const arr = [231,4,254,19]

function returnSecond(getArray){
    return getArray[1];
}

console.log(returnSecond(arr));