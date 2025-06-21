const score = 400;

const balance = new Number(100);    // this is a new object which is of number types - 
// console.log(score);     // 400
// console.log(balance);   // [Number: 100]


// console.log(balance.toString().length);
// console.log(balance.toFixed(2));    // give the precision value


const otherNumber = 132.89033;
// console.log(otherNumber.toPrecision(4));    // mainly do round-off


const hundreds = 1000000;
// console.log(hundreds.toLocaleString("en-IN"));  // LocaleString inserts ',' for easy reading of a number. By default it is in U.S standards but with "en-IN" we can convert it into INDIAN standards(number system).


// console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991
// console.log(Number.MIN_SAFE_INTEGER); // -9007199254740991
// console.log(Number.MAX_VALUE); // 1.7976931348623157e+308
// console.log(Number.MIN_VALUE); // 5e-324
// console.log(Number.POSITIVE_INFINITY); // Infinity
// console.log(Number.NEGATIVE_INFINITY_INFINITY); // undefined


// ++++++++++++++++++  Maths  +++++++++++++++
console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.6));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.9));