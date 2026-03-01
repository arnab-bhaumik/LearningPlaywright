/*
 * File: 01_grade_calculator.js
 * Purpose: Demonstrates grade calculator
 */

let grade;
let score = 100;

if (typeof score !== "number") {
    console.log("Are you fool,why you are gving score as not a number");
    return;
}

if (score < 0 || score > 100) {
    console.log("Are you fool,why you are gving score <0 or. > 100");
    return;
}

if (score >= 90) {
    grade = "A";
} else if (score >= 80) {
    grade = "B";
}
else if (score >= 70) {
    grade = "C";
}
else if (score >= 60) {
    grade = "D";
} else {
    grade = "F";
}
console.log("For the score", score, "Grade is ->", grade);
