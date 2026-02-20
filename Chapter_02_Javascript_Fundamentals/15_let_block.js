/*
 * File: 15_let_block.js
 * Purpose: Demonstrates block scope with let
 */

let a = "Arnab";

if (true) {
    console.log(a); //local varaible , TDZ
    let a = "temp";
}