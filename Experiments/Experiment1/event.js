// Create a custom EventEmitter that triggers "greet" or "exit".
// Custom EventEmitter

const EventEmitter = require('events');

// Create an EventEmitter object
const eventEmitter = new EventEmitter();

// Register greet event
eventEmitter.on('greet', () => {
    console.log("Hello! Welcome to Node.js.");
});

// Register exit event
eventEmitter.on('exit', () => {
    console.log("Exit event triggered. Goodbye!");
});

// Trigger greet event
eventEmitter.emit('greet');

// Trigger exit event
eventEmitter.emit('exit');