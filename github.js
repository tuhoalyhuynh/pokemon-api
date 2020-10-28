const container = document.querySelector('.container');



fetch('https://api.github.com/users/tuhoalyhuynh')
.then(response => {
    return response.json();
})
.then(githubData => {
    const thObj = {
        bio: githubData.bio,
        username: githubData.login,
        name: githubData.name,
    }
    console.log(thObj);

    const newElement = document.createElement('p');
    newElement.textContent = thObj.username;

    container.appendChild(newElement);
})
.catch(error => {
    console.log(error);
})