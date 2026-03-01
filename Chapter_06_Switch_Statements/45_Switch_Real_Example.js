/*
 * File: 45_Switch_Real_Examaple.js
 * Purpose: Demonstrates switch real example
 */
let statusCode = 200;
switch (statusCode) {
    case 200:
        console.log("Success");
        break;
    case 404:
        console.log("Not Found");
        break;
    case 500:
        console.log("Server Error");
        break;
    default:
        console.log("Unknown Error");
}