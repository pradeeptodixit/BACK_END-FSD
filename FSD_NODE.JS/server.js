const http = require("http");
const fs = require("fs");

const PORT = 3000;
const DATA_FILE = "students.json";

// HTML Form
const formHTML = `
<!DOCTYPE html>
<html>
<head>
    <title>Student Record Management</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background: #f2f2f2;
            padding: 40px;
        }

        .container {
            width: 400px;
            margin: auto;
            background: white;
            padding: 25px;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0,0,0,0.2);
        }

        h1 {
            text-align: center;
        }

        label {
            display: block;
            margin-top: 15px;
            font-weight: bold;
        }

        input {
            width: 100%;
            padding: 10px;
            margin-top: 5px;
            box-sizing: border-box;
        }

        button {
            width: 100%;
            padding: 12px;
            margin-top: 20px;
            background: #007bff;
            color: white;
            border: none;
            cursor: pointer;
            border-radius: 5px;
        }

        button:hover {
            background: #0056b3;
        }

        a {
            display: block;
            text-align: center;
            margin-top: 15px;
        }
    </style>
</head>

<body>

<div class="container">

    <h1>Student Record Form</h1>

    <form method="POST" action="/add">

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

    <a href="/students">View Student Records</a>

</div>

</body>
</html>
`;

// Create HTTP Server
const server = http.createServer((req, res) => {

    // Home Page
    if (req.method === "GET" && req.url === "/") {

        res.writeHead(200, {
            "Content-Type": "text/html"
        });

        res.end(`
            <h1>Welcome to Student Record Management System</h1>
            ${formHTML}
        `);
    }

    // Add Student
    else if (req.method === "POST" && req.url === "/add") {

        let body = "";

        // Receive form data
        req.on("data", (chunk) => {
            body += chunk.toString();
        });

        req.on("end", () => {

            // Convert URL encoded form data into an object
            const params = new URLSearchParams(body);

            const student = {
                name: params.get("name"),
                roll: params.get("roll"),
                course: params.get("course"),
                email: params.get("email")
            };

            // Read existing student records
            fs.readFile(DATA_FILE, "utf8", (err, data) => {

                let students = [];

                if (!err && data) {
                    try {
                        students = JSON.parse(data);
                    } catch (error) {
                        students = [];
                    }
                }

                // Add new student
                students.push(student);

                // Store data in students.json
                fs.writeFile(
                    DATA_FILE,
                    JSON.stringify(students, null, 2),
                    (err) => {

                        if (err) {
                            res.writeHead(500, {
                                "Content-Type": "text/html"
                            });

                            res.end("<h1>Error saving student record</h1>");
                            return;
                        }

                        // Redirect to student records
                        res.writeHead(302, {
                            Location: "/students"
                        });

                        res.end();
                    }
                );
            });
        });
    }

    // Display Student Records
    else if (req.method === "GET" && req.url === "/students") {

        fs.readFile(DATA_FILE, "utf8", (err, data) => {

            let students = [];

            if (!err && data) {
                try {
                    students = JSON.parse(data);
                } catch (error) {
                    students = [];
                }
            }

            let rows = "";

            students.forEach((student, index) => {

                rows += `
                    <tr>
                        <td>${index + 1}</td>
                        <td>${student.name}</td>
                        <td>${student.roll}</td>
                        <td>${student.course}</td>
                        <td>${student.email}</td>
                    </tr>
                `;
            });

            res.writeHead(200, {
                "Content-Type": "text/html"
            });

            res.end(`
<!DOCTYPE html>
<html>
<head>
    <title>Student Records</title>

    <style>
        body {
            font-family: Arial, sans-serif;
            padding: 30px;
            background: #f5f5f5;
        }

        h1 {
            text-align: center;
        }

        table {
            width: 100%;
            border-collapse: collapse;
            background: white;
        }

        th, td {
            border: 1px solid #ccc;
            padding: 12px;
            text-align: center;
        }

        th {
            background: #007bff;
            color: white;
        }

        a {
            display: block;
            margin: 20px auto;
            text-align: center;
        }
    </style>
</head>

<body>

<h1>Student Records</h1>

<table>
    <tr>
        <th>S.No.</th>
        <th>Student Name</th>
        <th>Roll Number</th>
        <th>Course</th>
        <th>Email</th>
    </tr>

    ${rows}

</table>

<a href="/">Add Another Student</a>

</body>
</html>
            `);
        });
    }

    // Invalid Route
    else {

        res.writeHead(404, {
            "Content-Type": "text/html"
        });

        res.end("<h1>404 - Page Not Found</h1>");
    }
});

// Start Server
server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});