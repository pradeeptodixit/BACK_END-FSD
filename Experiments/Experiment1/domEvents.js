// Simulate DOM-like event handling in Node.js using events.
const EventEmitter = require('events');

// Create an event emitter object
const button = new EventEmitter();

// Register click event
button.on('click', () => {
    console.log("Button Clicked!");
});

// Register mouseover event
button.on('mouseover', () => {
    console.log("Mouse is over the button!");
});

// Register doubleclick event
button.on('doubleclick', () => {
    console.log("Button Double Clicked!");
});

// Trigger events
button.emit('click');
button.emit('mouseover');
button.emit('doubleclick');