// Perform CRUD operations on files using fs module.
const fs = require('fs');

// CREATE a file
fs.writeFileSync('sample.txt', 'Hello! Welcome to Node.js.');
console.log("File created successfully.");

// READ the file
let data = fs.readFileSync('sample.txt', 'utf8');
console.log("File Content:", data);

// UPDATE the file
fs.appendFileSync('sample.txt', '\nThis is an updated file.');
console.log("File updated successfully.");

// READ updated content
data = fs.readFileSync('sample.txt', 'utf8');
console.log("Updated Content:", data);

// DELETE the file
fs.unlinkSync('sample.txt');
console.log("File deleted successfully.");