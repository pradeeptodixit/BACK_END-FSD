// A callback function is a function passed as an argument to another function and executed after the completion of a specific task.
// Simple Callback Function
function LearningFSD() {
    console.log("Learning FSD");
}

function FSD(callback) {
    console.log("FSD is interesting");
    callback();
}
FSD(LearningFSD);

// Callback with Parameters
function hello(n1, n2, callback) {
    let sum = n1 + n2;
    callback(sum);
}

function display(result) {
    console.log("Sum =", result);
}
hello(10, 20, display);

// Real-Life Example of Callback Function
console.log("Start");
setTimeout(function () {
    console.log("Task Completed");
}, 2000);
console.log("End");
// Here, the anonymous function passed to setTimeout() is the callback function. It executes after 2 seconds.