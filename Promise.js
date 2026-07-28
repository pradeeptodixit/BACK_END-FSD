// Promises for Asynchronous Programming
// JavaScript is single-threaded
const promiseOne = new Promise((resolve, reject) => {
    console.log("Promise task 1")
    resolve("Promises passed by using resolve");
    let message = true;
    if (!message == true) {
        console.log("message using promises failed");
    }
    else {
        console.log("error....")
    }
    setTimeout(() => {
        console.log(resolve());
    }, 2000)
});

// const promiseOne = new Promise((resolve, reject) => {
//     console.log("Promise task 1");

//     let message = true;
//     if (message) {
//         // Resolve the promise after 2 seconds
//         setTimeout(() => {
//             resolve("Promise passed by using resolve");
//         }, 2000);
//     } else {
//         reject("Message using promises failed");
//     }
// });

promiseOne
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    });

// Async / Await
async function test()
{
    console.log("2");

    await Promise.resolve(console.log("3"));

    console.log("4");
}
test();
console.log("5");