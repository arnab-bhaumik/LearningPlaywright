/**
 * File: 04_hot-code.js
 * Purpose: Demonstrates repeated function execution
 */

console.log("Starting calculation demo...");

function add(a, b) {
    return a + b;
}

let result = 0;

for (let i = 0; i < 10000; i++) {
    result = add(i, i + 1);
}

console.log("Result after 10,000 executions:", result);