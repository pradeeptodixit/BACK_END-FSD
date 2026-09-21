import http from "http";
import fs from "fs";

const server = http.createServer((req, res) => {

    if (req.method === "GET" && req.url === "/") {
        const html = `

        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Student Record System</title>

            <style>
                body {
                    font-family: Arial, sans-serif;
                    background: #f2f2f2;
                    margin: 0;
                    padding: 40px;
                }

                .container {
                    width: 400px;
                    margin: auto;
                    background: white;
                    padding: 30px;
                    border-radius: 10px;
                    box-shadow: 0 0 10px rgba(0,0,0,0.2);
                }

                h1 {
                    text-align: center;
                }

                label {
                    display: block;
                    margin-top: 15px;
                    margin-bottom: 5px;
                }

                input {
                    width: 100%;
                    padding: 10px;
                    box-sizing: border-box;
                }

                button {
                    width: 100%;
                    margin-top: 20px;
                    padding: 12px;
                    background: #222;
                    color: white;
                    border: none;
                    cursor: pointer;
                }

                button:hover {
                    background: #444;
                }

                .students {
                    display: block;
                    text-align: center;
                    margin-top: 20px;
                }
            </style>
        </head>

        <body>
            <div class="container">

                <h1>Student Record System</h1>

                <form method="POST" action="/add-student">

                    <label>Student Name</label>
                    <input type="text" name="name" required>

                    <label>Roll Number</label>
                    <input type="text" name="roll" required>

                    <label>Course</label>
                    <input type="text" name="course" required>

                    <label>Email</label>
                    <input type="email" name="email" required>

                    <button type="submit">Add Student</button>

                </form>

                <a class="students" href="/students">
                    View Student Records
                </a>

            </div>
        </body>
        </html>
        `;

        res.writeHead(200, {
            "Content-Type": "text/html"
        });

        res.end(html);
    }

    else if (req.method === "POST" && req.url === "/add-student") {

        let body = "";

        req.on("data", chunk => {
            body += chunk.toString();
        });

        req.on("end", () => {

            const params = new URLSearchParams(body);

            const student = {
                name: params.get("name"),
                roll: params.get("roll"),
                course: params.get("course"),
                email: params.get("email")
            };

            fs.readFile("students.json", "utf8", (err, data) => {

                let students = [];

                if (!err && data) {
                    try {
                        students = JSON.parse(data);
                    } catch (error) {
                        students = [];
                    }
                }

                students.push(student);

                fs.writeFile(
                    "students.json",
                    JSON.stringify(students, null, 2),
                    err => {

                        if (err) {
                            res.writeHead(500, {
                                "Content-Type": "text/plain"
                            });

                            res.end("Error saving student record");
                            return;
                        }

                        res.writeHead(302, {
                            Location: "/students"
                        });

                        res.end();
                    }
                );
            });
        });
    }

    else if (req.method === "GET" && req.url === "/students") {

        fs.readFile("students.json", "utf8", (err, data) => {

            let students = [];

            if (!err && data) {
                try {
                    students = JSON.parse(data);
                } catch (error) {
                    students = [];
                }
            }

            let rows = "";

            students.forEach(student => {
                rows += `
                <tr>
                    <td>${student.name}</td>
                    <td>${student.roll}</td>
                    <td>${student.course}</td>
                    <td>${student.email}</td>
                </tr>
                `;
            });

            const html = `

            <!DOCTYPE html>
            <html>
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Student Records</title>
                <style>
                    body {
                        font-family: Arial, sans-serif;
                        background: #f2f2f2;
                        padding: 40px;
                    }
                    .container {
                        max-width: 900px;
                        margin: auto;
                        background: white;
                        padding: 30px;
                        border-radius: 10px;
                        box-shadow: 0 0 10px rgba(0,0,0,0.2);
                    }
                    h1 {
                        text-align: center;
                    }
                    table {
                        width: 100%;
                        border-collapse: collapse;
                        margin-top: 20px;
                    }
                    th, td {
                        border: 1px solid #ccc;
                        padding: 12px;
                        text-align: left;
                    }
                    th {
                        background: #222;
                        color: white;
                    }
                    a {
                        display: inline-block;
                        margin-top: 20px;
                    }
                </style>
            </head>

            <body>
                <div class="container">
                    <h1>Student Records</h1>
                    <table>
                        <tr>
                            <th>Student Name</th>
                            <th>Roll Number</th>
                            <th>Course</th>
                            <th>Email</th>
                        </tr>

                        ${rows}
                    </table>

                    <a href="/">Add Another Student</a>
                </div>
            </body>
            </html>
            `;
            res.writeHead(200, {
                "Content-Type": "text/html"
            });
            res.end(html);
        });
    }

    else {
        res.writeHead(404, {
            "Content-Type": "text/plain"
        });
        res.end("404 - Page Not Found");
    }
});

server.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});