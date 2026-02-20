/*
 * File: 17_let_TDZ.js
 * Purpose: Demonstrates let with TDZ
 */

let a = 10
console.log(a)
if (true) {
    console.log(a); //TDZ
    let a = 20;
}