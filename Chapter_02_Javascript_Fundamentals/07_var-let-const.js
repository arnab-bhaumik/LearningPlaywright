/**
 * File: 07_var-let-const.js
 * Purpose: Demonstrates difference between var, let and const
 */
// var - Function Scoped

var a = 10; // Global Scope
console.log(a);

// Defination of the function
function printHello() {
    console.log("Hello World");
    var a = 20; // Local Scope
    console.log(a);
    if (true) {
        var a = 30;
        console.log(a); // 30
    }
    console.log("F ->", a);
}


// // Calling of the function 
printHello();


// LET example (block scoped)

let value = 20;
console.log("Global value:", value);

function demoScope() {
    let value = 30;
    console.log("Inside function:", value);

    if (true) {
        let value = 5;
        console.log("Inside block:", value);
    }

    console.log("Function value:", value);
}

demoScope();

// reassignment allowed
let b = 10;
b = 20;
console.log("Updated b:", b);


// CONST example
const PI = 3.14;
console.log("Constant PI:", PI);

// NOTE: const cannot be reassigned
// PI = 3.14159  ← intentionally commented (avoid runtime error)
