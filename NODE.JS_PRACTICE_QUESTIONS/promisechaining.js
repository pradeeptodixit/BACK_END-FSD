function loginUser() {
    return new Promise((resolve) => {

        setTimeout(() => {
            console.log("User logged in");
            resolve();
        }, 1000);

    });
}

function getUserDetails() {
    return new Promise((resolve) => {

        setTimeout(() => {
            console.log("User details fetched");
            resolve();
        }, 1000);

    });
}

function getUserOrders() {
    return new Promise((resolve) => {

        setTimeout(() => {
            console.log("User orders fetched");
            resolve();
        }, 1000);

    });
}

loginUser()
    .then(() => {
        return getUserDetails();
    })
    .then(() => {
        return getUserOrders();
    })
    .then(() => {
        console.log("All operations completed");
    })
    .catch((error) => {
        console.log("Error:", error);
    });