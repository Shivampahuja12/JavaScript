// Immediately Invoked Function Expressions (IIFE)

// (function)(execution)

(function db(){
    // named iife
    console.log("DB Connected");
})();   // ; is for stopping the IIFE execution

((name) => {
    console.log(`DB Connected Two ${name}`);
})("shivam");