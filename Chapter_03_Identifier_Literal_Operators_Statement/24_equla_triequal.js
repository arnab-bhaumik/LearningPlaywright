/*
 * File: 24_equla_triequal.js
 * Purpose: Demonstrates == and ===
 */

// ==, ===, = 

let a = 5;

// console.log(5 = 5);

// console.log(5 = 5);
console.log(5 == "5"); // Output: true
console.log(5 === "5");  // number, string -> Output: false

console.log(null == undefined); // special rule, they only equal each other) -> Output: true
console.log(null === undefined); // Output: false

console.log(5 == 5.0); // Output: true
console.log(5 === 5.0);  // Output: true
console.log(5 === 5.01); // Output: false