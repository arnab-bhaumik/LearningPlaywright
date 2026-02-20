/**
 * File: 09_Hoisting.js
 * Purpose: Demonstrates variable and function hoisting
 */

console.log(a);
var a = "Arnab";
console.log(a);

// ---- Phase 1: Memory Creation ----
// var a  = undefined;
// var b  = undefined;

// ---- Phase 2: Execution ----
console.log(a); // undefined
var a = "Arnab";
console.log(a); // Arnab

// Hoisting does NOT physically move your code.
// It is a mental model to understand how the JS engine handles declarations during compilation.