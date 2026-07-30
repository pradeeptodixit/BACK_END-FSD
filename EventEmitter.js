const EventEmitter = require('events')
const event = new EventEmitter();
let name = "Pradeepto Dixit";
let age = "20";
event.on("userdetails", (username, userage) => {
    console.log('Name is ${username} age is ${userage}')
})
event.emit("userdetails", name, age);