const users = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Users fetched");
    }, 2000);

});

const products = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Products fetched");
    }, 1000);

});

const orders = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Orders fetched");
    }, 3000);

});

Promise.all([users, products, orders])
    .then((results) => {
        console.log(results);
    })
    .catch((error) => {
        console.log(error);
    });