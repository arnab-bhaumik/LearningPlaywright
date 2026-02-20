/*
 * File: 16_var_if_loop.js
 * Purpose: Demonstrates var with if and loops
 */

var a = "Arnab";

if (true) {
    console.log(a); // Arnab
    var a = "temp";
    console.log(a); // temp
}
console.log(a); // temp