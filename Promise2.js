// Create promises that will print username and password using and if username and password are not found, then, it will call reject state and print ERROR.... .
const loginPromise = new Promise((resolve, reject) => {

    let username = "Pradeepto Dixit";
    let password = "12345";

    // Check whether username and password exist
    if (username && password) {
        resolve({
            username: username,
            password: password
        });
    } else {
        reject("ERROR.... Username or Password not found.");
    }
});

// Consume the Promise
loginPromise
    .then((user) => {
        console.log("Username:", user.username);
        console.log("Password:", user.password);
    })
    .catch((error) => {
        console.log(error);
    });