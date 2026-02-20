/*
 * File: 22_null_typepf.js
 * Purpose: Demonstrates null and typeof
 */


// Null — "intentionally nothing"

let selectedItem = null;
let searchResult = null;

console.log(searchResult); // Output: null

// Undefined — "not yet assigned"
let declaredOnly;                     // automatically undefined
console.log(declaredOnly);           // undefined


// Equality comparisons
console.log(null == undefined); // Output: true
