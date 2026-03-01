/*
 * File: 38_Logical_Operators_IF_ELSE.js
 * Purpose: Demonstrates logical operators IF ELSE
 */

let username = "admin";
let password = "123456";
let isAccountActive = true;

if ((username === "admin" && password === "123456") && isAccountActive) {
    console.log("Login successful");
}
else {
    console.log("Login failed");
}   