/*
 * File: 61_DO_while.js
 * Purpose: Demonstrates do while
 */

let retry = 0;

do {
    console.log("Execute a code!");
    console.log("Retrying.....", retry);
    retry++;


} while (retry < 3);


let a = 10;
while (a < 10) {
    console.log(a);
    a++
}

let b = 7;
do {
    console.log(b);
    b++;
} while (b < 10);