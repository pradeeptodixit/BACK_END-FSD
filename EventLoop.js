// Create one log synchronous task, function test, print any message, create promise inside it.
// Synchronous task
console.log("Program started");

function test() {
    console.log("Inside test() function");

    // Creating a Promise
    const promise = new Promise((resolve, reject) => {
        console.log("Promise is created");

        resolve("Promise resolved successfully");
    });

    promise.then((message) => {
        console.log(message);
    });
}
test();
console.log("Program ended");