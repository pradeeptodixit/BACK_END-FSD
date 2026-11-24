// Create routes that handle GET, POST, PUT, DELETE in Node.js.
const http = require('http');

const server = http.createServer((req, res) => {

    res.setHeader('Content-Type', 'text/plain');

    // GET Request
    if (req.method === 'GET' && req.url === '/users') {
        res.statusCode = 200;
        res.end('GET: Fetch all users');
    }

    // POST Request
    else if (req.method === 'POST' && req.url === '/users') {
        res.statusCode = 201;
        res.end('POST: User created successfully');
    }

    // PUT Request
    else if (req.method === 'PUT' && req.url === '/users') {
        res.statusCode = 200;
        res.end('PUT: User updated successfully');
    }

    // DELETE Request
    else if (req.method === 'DELETE' && req.url === '/users') {
        res.statusCode = 200;
        res.end('DELETE: User deleted successfully');
    }

    // Invalid Route
    else {
        res.statusCode = 404;
        res.end('404: Route Not Found');
    }
});

// Start server
server.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});