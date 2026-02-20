/**
 * File: 11_hoisting_function.js
 * Purpose: Demonstrates function hoisting
 */

// Step 1 - Defination of functions
function getUserStatus() {
    // var status_code = undefined; - not shown to you.
    console.log(status_code); // undefined
    var status_code = "Active";
    console.log(status_code); // Active

}

// Step 2 - Calling of the functions
getUserStatus();

// Note: var is function-scoped, so status is hoisted to
// the top of getUserStatus(), NOT the global scope.