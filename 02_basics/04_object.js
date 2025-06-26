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

// const obj3 = {obj1, obj2};
// const obj3 = Object.assign({},obj1, obj2);  // target and source
// const obj3 = {...obj1, ...obj2}
// console.log(obj3);


// when entries come from the database.
const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email
// console.log(tinder);

// console.log(Object.keys(tinder));
// console.log(Object.values(tinder));
// console.log(Object.entries(tinder));

// console.log(tinder.hasOwnProperty('isLoggedIn'));


// DESTRUCTURING
const course = {
    courseName: "js in hindi",
    price: "999",
    courseInstructor: "hitesh",

}

// course.courseInstructor

const {courseInstructor: instructor} = course;
console.log(instructor);

