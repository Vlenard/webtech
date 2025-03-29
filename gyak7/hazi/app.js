const GITHUB_ACCESS_TOKEN = ''

function loadNavigation() {
    fetch('nav.html')
        .then(res => res.text())
        .then(navHtml => {
            const body = document.querySelector('body')
            body.insertAdjacentHTML('afterbegin', navHtml)
            console.log('Sikeres beillesztés!');
        })
        .catch(err => console.log('Hibás beillesztés!'))
}

loadNavigation()