// Dates

// let myDate = new Date();
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleTimeString());
// console.log(myDate.toTimeString());
// console.log(myDate.toUTCString());
// console.log(typeof myDate);     // object
// console.log(myDate.toJSONg());
// console.log(myDate.toJSONg());

let myCreatedDate = new Date(2006, 0, 12);
// console.log(myCreatedDate);
// console.log(myCreatedDate.toDateString());  // Thu Jan 12 2006 // month starts with 0.

// let myCreatedDate2 = new Date(2006, 0, 12, 15, 3);
// console.log(myCreatedDate2.toLocaleString());

// let myCreatedDate2 = new Date("12-01-2006");
// console.log(myCreatedDate2.toLocaleString());

let timeStamp = Date.now();
// console.log(timeStamp);
// console.log(timeStamp.getTime());       // not working
console.log(Math.floor(Date.now() / 1000));

let newDate = new Date();
// console.log(newDate);
// console.log(newDate.getMonth() + 1);
// console. log(newDate.getDay());

// Customization of date day
// newDate.toLocaleString("default", {
//   weekday: "long",
// });
