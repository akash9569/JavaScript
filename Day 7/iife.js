// Immediately Invoked Function Expressions(IIFE).

// function chai(){
//     console.log("Immediately Invoked Function Expressions(IIFE).");
// }
// chai()



(function chai(){
    console.log("Immediately Invoked Function Expressions(IIFE).");
}) ();


( () => {
    console.log(`Hello Everyone.`);
})();

( (name) => {
    console.log(`Hello ${name}, have a Nice Day.`);
})("Akash")

