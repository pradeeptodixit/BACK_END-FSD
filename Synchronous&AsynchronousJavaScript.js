// Synchronous and Asynchronous JavaScript
// Synchronous JavaScript: Blocking JavaScript
// Asynchronous JavaScript: Non-blocking JavaScript
// console.log("task 3");
// function hello(){
//     console.log("task 1");
//     setTimeout(function(){ // Passing Parameters in Function
//         console.log("task 2");
//         console.log("task 4");
//     },2000)
// }
// hello();
// console.log("task 5");

function hello(n1, n2, cb) {
    console.log("Task 1");

    let sum = n1 + n2;
    console.log("Sum =", sum);

    if (cb) {
        cb();
    }
    return sum;
}
let a = 10;
let b = 20;

// Function call without callback
console.log(hello(a, b));

// Callback functions
function hi() {
    console.log("sayHi");
}

function demo() {
    console.log("demo");
}

// Function call with callbacks
hello(a, b, hi);
hello(a, b, demo);
// callback: passed as an argument to another function and called callback function
function LearningFSD() {
    console.log("Learning FSD");
}

// Main function
function FSD(callback) {
    console.log("FSD is interesting");
    callback();
}

// Function call
FSD(LearningFSD);

// Proper way to implement a callback function in JavaScript
function hello(n1, n2, cb) {
    console.log("Task 1");

    let sum = n1 + n2;

    if (cb) {
        cb(sum);
    }
    return sum;
}

function hi(result) {
    console.log("sayHi");
    console.log("Sum =", result);
}

function demo(result) {
    console.log("demo");
    console.log("Sum =", result);
}

hello(10, 20, hi);
hello(10, 20, demo);

// Example of Synchronous JavaScript
console.log("Start");
console.log("Learning JavaScript");
console.log("End");

// Example of Asynchronous JavaScript
console.log("Start");
setTimeout(() => {
    console.log("Learning JavaScript");
}, 2000);
console.log("End");