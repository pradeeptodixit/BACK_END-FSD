function getData()
{
    return new Promise((resolve, reject) => {
        reject("Unable to fetch data");
    });
}

async function fetchData()
{
    try
    {
        const result = await getData();
        console.log(result);
    }
    catch (error)
    {
        console.log("Error:", error);
    }
}
fetchData();