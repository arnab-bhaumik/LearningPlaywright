/*
 * File: 40_Formvalidator_IF_ELSE.js
 * Purpose: Demonstrates form validator IF ELSE
 */
let email = "testing@gmail.com";
let password = "123453456";

function validateForm(email, password) {
    if (email.includes("@") && password.length >= 6) {
        console.log("Form is valid");
    }
    else {
        console.log("Form is invalid");
    }
}
validateForm(email, password);

