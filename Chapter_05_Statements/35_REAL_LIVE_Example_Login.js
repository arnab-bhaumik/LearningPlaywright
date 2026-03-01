/*
 * File: 35_REAL_LIVE_Example_Login.js
 * Purpose: Demonstrates real live example of login
 */

let isLogin = true;
let userRole = "Editor";

if (isLogin) {
    console.log("User is logged in");
    if (userRole === "Admin") {
        console.log("you can do all the things");
    }
    else if (userRole === "Editor") {
        console.log("you can edit the things");
    }
    else {
        console.log("you can only view the things");
    }
}
else {
    console.log("User is not logged in");
}   