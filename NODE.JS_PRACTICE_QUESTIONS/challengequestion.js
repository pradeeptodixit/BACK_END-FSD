console.log("Start");

setTimeout(() => {
    console.log("Timeout 1");
}, 0);

Promise.resolve().then(() => {

    console.log("Promise 1");

    setTimeout(() => {
        console.log("Timeout 2");
    }, 0);

});

async function demo() {

    console.log("Async 1");

    await Promise.resolve();

    console.log("Async 2");

}

demo();

console.log("End");