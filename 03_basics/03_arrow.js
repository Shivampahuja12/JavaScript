const user = {
    username: "shivam",
    price: 999,
    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        // console.log(this)
    }
}


// user.welcomeMessage();
// user.username = "harsh";
// user.welcomeMessage();

// console.log(this);


// function chai() {
//     let username = "shivam";
//     console.log(this.username); // undefined
// }

// chai()



// const fun = ()=> {
//     let username = "shivam";
//     console.log(this.username); // undefined
//     console.log(this); // {}
// }

// fun()



// pure arrow function
// explicit return
// const addTwo = (n1, n2)=> {
//     return n1+n2;
// }


// implicit return
// const addTwo = (n1, n2)=>  (n1+n2);

// console.log(addTwo(1, 4));


// implicit return for object
const obj = ()=> ({username: "Shivam"})
console.log(obj())





