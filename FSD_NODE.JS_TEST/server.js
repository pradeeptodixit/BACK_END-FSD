const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = 3000;
const DATA_FILE = path.join(__dirname, "students.json");

// Create students.json if it doesn't exist
if (!fs.existsSync(DATA_FILE)) {
    fs.writeFileSync(DATA_FILE, "[]");
}

// Read students from JSON file
function getStudents() {
    try {
        const data = fs.readFileSync(DATA_FILE, "utf8");
        return data ? JSON.parse(data) : [];
    } catch (error) {
        return [];
    }
}

// Save students to JSON file
function saveStudents(students) {
    fs.writeFileSync(DATA_FILE, JSON.stringify(students, null, 2));
}

// HTML Form
function getHomePage() {
    return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Student Records</title>

    <style>
        * {
            box-sizing: border-box;
            font-family: Arial, sans-serif;
        }

        body {
            margin: 0;
            background: #f2f5f9;
            padding: 40px 20px;
        }

        .container {
            max-width: 600px;
            margin: auto;
            background: white;
            padding: 30px;
            border-radius: 12px;
            box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
        }

        h1 {
            text-align: center;
            color: #222;
        }

        p {
            text-align: center;
            color: #666;
        }

        label {
            display: block;
            margin-top: 15px;
            margin-bottom: 5px;
            font-weight: bold;
        }

        input {
            width: 100%;
            padding: 12px;
            border: 1px solid #ccc;
            border-radius: 6px;
        }

        button {
            width: 100%;
            margin-top: 25px;
            padding: 13px;
            border: none;
            border-radius: 6px;
            background: #2563eb;
            color: white;
            font-size: 16px;
            cursor: pointer;
        }

        button:hover {
            background: #1d4ed8;
        }

        .link {
            display: block;
            text-align: center;
            margin-top: 20px;
            color: #2563eb;
            text-decoration: none;
        }
    </style>
</head>

<body>

<div class="container">

    <h1>Student Record System</h1>

    <p>Welcome! Add a new student record below.</p>

    <form method="POST" action="/add-student">

        <label for="name">Student Name</label>
        <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter student name"
            required
        >

        <label for="roll">Roll Number</label>
        <input
            type="text"
            id="roll"
            name="roll"
            placeholder="Enter roll number"
            required
        >

        <label for="course">Course</label>
        <input
            type="text"
            id="course"
            name="course"
            placeholder="Enter course"
            required
        >

        <label for="email">Email</label>
        <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter email"
            required
        >

        <button type="submit">Add Student</button>

    </form>

    <a class="link" href="/students">
        View All Students
    </a>

</div>

</body>
</html>
`;
}

// Student records page
function getStudentsPage(students) {

    let rows = "";

    if (students.length === 0) {
        rows = `
            <tr>
                <td colspan="5">No student records found.</td>
            </tr>
        `;
    } else {
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
    }

    return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Student Records</title>

    <style>
        * {
            box-sizing: border-box;
            font-family: Arial, sans-serif;
        }

        body {
            margin: 0;
            padding: 40px 20px;
            background: #f2f5f9;
        }

        .container {
            max-width: 1000px;
            margin: auto;
            background: white;
            padding: 30px;
            border-radius: 12px;
            box-shadow: 0 5px 20px rgba(0,0,0,0.1);
        }

        h1 {
            text-align: center;
        }

        table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 25px;
        }

        th, td {
            padding: 12px;
            border: 1px solid #ddd;
            text-align: center;
        }

        th {
            background: #2563eb;
            color: white;
        }

        tr:nth-child(even) {
            background: #f8fafc;
        }

        .back {
            display: inline-block;
            margin-top: 20px;
            text-decoration: none;
            background: #2563eb;
            color: white;
            padding: 10px 18px;
            border-radius: 6px;
        }
    </style>
</head>

<body>

<div class="container">

    <h1>Student Records</h1>

    <table>

        <thead>
            <tr>
                <th>S.No.</th>
                <th>Student Name</th>
                <th>Roll Number</th>
                <th>Course</th>
                <th>Email</th>
            </tr>
        </thead>

        <tbody>
            ${rows}
        </tbody>

    </table>

    <a class="back" href="/">
        ← Add New Student
    </a>

</div>

</body>
</html>
`;
}

// Create HTTP server
const server = http.createServer((req, res) => {

    // Home page
    if (req.method === "GET" && req.url === "/") {

        res.writeHead(200, {
            "Content-Type": "text/html"
        });

        res.end(getHomePage());
    }

    // Display students
    else if (req.method === "GET" && req.url === "/students") {

        const students = getStudents();

        res.writeHead(200, {
            "Content-Type": "text/html"
        });

        res.end(getStudentsPage(students));
    }

    // Add student
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

            const students = getStudents();

            students.push(student);

            saveStudents(students);

            res.writeHead(302, {
                Location: "/students"
            });

            res.end();
        });
    }

    // 404 page
    else {

        res.writeHead(404, {
            "Content-Type": "text/html"
        });

        res.end(`
            <h1>404 - Page Not Found</h1>
            <a href="/">Go Home</a>
        `);
    }
});

// Start server
server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});