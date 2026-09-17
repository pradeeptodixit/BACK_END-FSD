console.log("1");

setTimeout(() => {
    console.log("2");
}, 0);

async function test() {

    console.log("3");

    await Promise.resolve();

    console.log("4");

}

test();

Promise.resolve().then(() => {

    console.log("5");

});

console.log("6");