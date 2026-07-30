console.log("Synchronus task");
const f1 = () => {
    console.log("f1");
}
const f2 = () => {
    console.log("f2");
}
function main() {
    console.log("This event loop");
    setTimeout(f1, 2000);
    setTimeout(f2, 5000);
    new Promise((resolve, reject) => {
        resolve("I am promise1")
    }).then((result) => {
        console.log(result);
    })
    new Promise((resolve, reject) => {
        resolve("This is promise2")
    }).then((res) => {
        console.log(res);
    })
}
main();