const tinder = new Object();
// initializing dynamically
// console.log(tinder);
tinder.id = "123abc";
tinder.name = "Sam";
tinder.isLoggedIn = false;

// console.log(tinder);


const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "shivam",
            lastname: "pahuja"
        }
    }
}
// console.log(regularUser.fullname.userfullname.lastname)

const obj1 = {1: "a", 2: "b"};
const obj2 = {3: "a", 4: "b"};

const obj3 = {obj1, obj2};
console.log(obj3);