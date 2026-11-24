// Create a basic HTTP server using http.createServer(), Respond with "Hello World" and return headers + status code.
const http = require('http');

// Create HTTP server
const server = http.createServer((req, res) => {

    // Set status code
    res.statusCode = 200;

    // Set response headers
    res.setHeader('Content-Type', 'text/plain');

    // Send response
    res.end('Hello World');
});

// Start server
server.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});