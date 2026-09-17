import http from 'http';

const PORT = 3000;

const server = http.createServer((req, res) => {
    const url = req.url;

    // Common HTML header
    const header = `
        <!DOCTYPE html>
        <html>
        <head>
            <title>My College</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    margin: 40px;
                    background-color: #f4f4f4;
                }

                nav {
                    background-color: #222;
                    padding: 15px;
                }

                nav a {
                    color: white;
                    text-decoration: none;
                    margin-right: 20px;
                }

                nav a:hover {
                    color: #00bcd4;
                }

                main {
                    background-color: white;
                    padding: 30px;
                    margin-top: 20px;
                    border-radius: 8px;
                }
            </style>
        </head>
        <body>

        <nav>
            <a href="/">Home</a>
            <a href="/home">Home Page</a>
            <a href="/about">About</a>
        </nav>

        <main>
    `;

    const footer = `
        </main>
        </body>
        </html>
    `;

    // Set content type as HTML
    res.setHeader('Content-Type', 'text/html');

    // Route: /
    if (url === '/') {
        res.statusCode = 200;

        res.end(`
            ${header}
            <h1>Welcome to My College</h1>
            <p>Welcome to our college website.</p>
            <p>Explore our courses, departments and campus facilities.</p>
            ${footer}
        `);
    }

    // Route: /home
    else if (url === '/home') {
        res.statusCode = 200;

        res.end(`
            ${header}
            <h1>Home Page</h1>
            <p>Welcome to the Home Page of My College.</p>
            <p>We provide quality education and excellent opportunities for students.</p>
            ${footer}
        `);
    }

    // Route: /about
    else if (url === '/about') {
        res.statusCode = 200;

        res.end(`
            ${header}
            <h1>About Computer Science Department</h1>
            <p>
                The Computer Science Department offers quality education
                in programming, software development, artificial intelligence,
                data structures and other modern technologies.
            </p>
            ${footer}
        `);
    }

    // Invalid URL
    else {
        res.statusCode = 404;

        res.end(`
            ${header}
            <h1>404 - Page Not Found</h1>
            <p>The requested page does not exist.</p>
            <a href="/">Go back to Home</a>
            ${footer}
        `);
    }
});

// Start the server
server.listen(PORT, () => {
    console.log(`College server running at http://localhost:${PORT}`);
});