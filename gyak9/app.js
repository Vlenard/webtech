const GITHUB_ACCESS_TOKEN = '';

function loadNavigation() {
    fetch('nav.html')
        .then(res => res.text())
        .then(navHtml => {
            const body = document.querySelector('body');
            body.insertAdjacentHTML('afterbegin', navHtml);
        })
        .catch(err => console.error(err));
}

async function loadUserData() {
    await fetch('https://api.github.com/user', {
        headers: {
            'Authorization': `Bearer ${GITHUB_ACCESS_TOKEN}`
        }
    })
        .then(res => res.json())
        .then(userData => {
            sessionStorage.setItem('username', userData.login);
        })
        .catch(err => console.error(err));
}

loadNavigation();
loadUserData();

const username = sessionStorage.getItem('username');
if (!username) {
    loadUserData();
}