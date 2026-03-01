/*
 * File: 36_API_IF_ELSE.js
 * Purpose: Demonstrates API IF ELSE
 */

let statusCode = 500;

if (statusCode === 200) {
    console.log("Success");
}
else if (statusCode === 404) {
    console.log("Not Found");
}
else if (statusCode === 500) {
    console.log("Server Error");
}
else {
    console.log("Unknown Error");
}

