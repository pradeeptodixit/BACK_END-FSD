function checkAge(age){
    return new Promise((resolve, reject) => {
        if (age >= 18)
        {
            resolve("Eligible");
        }
        else
        {
            reject("Not Eligible");
        }
    });
}

checkAge(20)
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    });