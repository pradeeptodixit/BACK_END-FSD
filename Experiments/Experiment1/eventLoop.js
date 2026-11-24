// Visualize the event loop using setTimeout, setImmediate, and process.nextTick.
console.log("Start");

// setTimeout
setTimeout(() => {
    console.log("setTimeout executed");
}, 0);

// setImmediate
setImmediate(() => {
    console.log("setImmediate executed");
});

// process.nextTick
process.nextTick(() => {
    console.log("process.nextTick executed");
});

console.log("End");