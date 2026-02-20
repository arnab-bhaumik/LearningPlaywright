/**
 * File: 12_hoisting_if_block.js
 * Purpose: Demonstrates hoisting within if blocks
 */
console.log(x);
// Example 1: var hoisting
if (true) {
    var x = 10;
}
console.log(x); // Output: 10

// Example 2: let hoisting
if (true) {
    let y = 20;
    console.log(y); // Output: 20
}
//console.log(y); // ReferenceError: y is not defined

// Example 3: const hoisting
if (true) {
    const z = 30;
    console.log(z); // Output: 30
}
console.log(z); // ReferenceError: z is not defined