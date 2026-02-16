/**
 * File: 02_js-step-by-step.js
 * Purpose: Demonstrates variables, loops and functions in JavaScript
 */

let value = 10;
console.log("Initial value:", value);

function printHello() {
    console.log("Hello from function");
}

// small loop for demo (not huge spam)
for (let i = 0; i < 5; i++) {
    console.log("Loop index:", i);
    printHello();
}