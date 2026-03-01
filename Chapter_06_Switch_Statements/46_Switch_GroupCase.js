/*
 * File: 46_Switch_GroupCase.js
 * Purpose: Demonstrates switch group case
 */
let userBrowser = "edge";
switch (userBrowser) {
    case "chrome":
    case "firefox":
    case "edge":
        console.log(`${userBrowser} is selected`);
        break;
    case "safari":
        console.log("safari is selected");
        break;
    case "ie":
        console.log("ie is selected");
        break;
    case "opera":
        console.log("opera is selected");
        break;
    default:
        console.log("Unknown browser");
}