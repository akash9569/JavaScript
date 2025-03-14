console.log("Hello JavaScript.")
console.log("JavaScript Variables.");

// Const Keyword: 
    /*
        Variables defined with const cannot be Redeclared
        Variables defined with const cannot be Reassigned
        Variables defined with const have Block Scope
    */

const pi=3.14;
console.log(pi);
// pi=3.142;        // This is no allowed in const.
// console.log(pi);

// Let Keyword: 
/*
    Variables defined with let can be reassigned
    Variables defined with let have Block Scope
    Variables declared with let must be Declared before use.
    Variables declared with let cannot be Redeclared in the same scope.

*/

let counter = 0;
console.log(counter); // Output: 0
counter = 1;
console.log(counter); // Output: 1

// Var Keyword:
/*
    Variables defined with var can be Redeclared
    Variables defined with var can be Reassigned
    Variables defined with var have Function Scope
    Variables declared with var are Hoisted to the top of the function or global scope.
*/

var x=10;
console.log(x);
var x=20;
console.log(x);

// Hoisting:
/*
    Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their containing scope before code execution.
*/

console.log(y); // Output: undefined
var y = 5;


console.table([pi,counter,x,y])

alert
