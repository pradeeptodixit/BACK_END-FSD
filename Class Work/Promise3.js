// Promise Example
const promise = new Promise((resolve, reject) => {
    setTimeout(function () {
        let err = true;

        if (!err) {
            resolve("User: ABC, Password: 1233");
        } else {
            reject("ERROR... Data failed");
        }
    }, 2000);
});

promise
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    });

// Async / Await Example
const fs = require("fs").promises;

async function test() {
    console.log("Message");

    try {
        const data = await fs.readFile("student.json", "utf-8");
        const students = JSON.parse(data);
        console.log(students);
    } catch (error) {
        console.log("Error:", error);
    }
}
test();