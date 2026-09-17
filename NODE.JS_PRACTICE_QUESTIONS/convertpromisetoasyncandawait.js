function getData()
{
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data received");
        }, 2000);
    });
}

async function displayData()
{
    const result = await getData();

    console.log(result);
}
displayData();