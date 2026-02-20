/*
 * File: 23_null_undefined.js
 * Purpose: Demonstrates null and undefined
 */

console.log(null === undefined); // (strict — different types)
console.log(null == undefined); // Output: true

console.log(null == 0); // Output: false
console.log(null == ""); // Output: false
console.log(undefined == 0); // Output: false
console.log(undefined == ""); // Output: false