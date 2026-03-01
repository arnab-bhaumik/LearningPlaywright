/*
 * File: 48_Iinterview_Question.js
 * Purpose: Demonstrates interview question
 */

let score = 80;

switch (true) {
    case (score >= 90):
        console.log("Perfect score!");
        break;

    case (score >= 80):
        console.log("Excellent score!");
        break;

    case (score >= 70):
        console.log("Good score!");
        break;

    case (score >= 60):
        console.log("Average score!");
        break;

    case (score >= 50):
        console.log("Below average score!");
        break;

    default:
        console.log("Failed!");
}