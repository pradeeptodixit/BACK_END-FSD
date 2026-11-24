const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();

// Home Route
app.get('/', (req, res) => {
    fs.readFile(path.join(__dirname, 'index.html'), 'utf8', (err, data) => {
        if (err) {
            return res.status(500).send('Error loading Home Page');
        }
        res.send(data);
    });
});

// About Route
app.get('/about', (req, res) => {
    fs.readFile(path.join(__dirname, 'about.html'), 'utf8', (err, data) => {
        if (err) {
            return res.status(500).send('Error loading About Page');
        }
        res.send(data);
    });
});

// Contact Route
app.get('/contact', (req, res) => {
    fs.readFile(path.join(__dirname, 'contact.html'), 'utf8', (err, data) => {
        if (err) {
            return res.status(500).send('Error loading Contact Page');
        }
        res.send(data);
    });
});

// Start Server
app.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});