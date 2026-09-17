function getUser() {

    return new Promise((resolve) => {

        setTimeout(() => {
            resolve("User data");
        }, 1000);

    });

}

function getProfile() {

    return new Promise((resolve) => {

        setTimeout(() => {
            resolve("Profile data");
        }, 1000);

    });

}

function getPosts() {

    return new Promise((resolve) => {

        setTimeout(() => {
            resolve("Posts data");
        }, 1000);

    });

}

async function fetchAllData() {

    const user = await getUser();
    console.log(user);

    const profile = await getProfile();
    console.log(profile);

    const posts = await getPosts();
    console.log(posts);

}

fetchAllData();