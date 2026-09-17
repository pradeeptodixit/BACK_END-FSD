const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Data fetched successfully");
    }, 2000);
});

promise.then((result) => {
    console.log(result);
});