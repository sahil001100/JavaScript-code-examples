const changeTheme = document.querySelector('.container');
changeTheme.addEventListener('click', (e) => {
    const blue = document.querySelector('#blue');
    const green = document.querySelector('#green');
    const light = document.querySelector('#light');

    if (e.target === blue) {
        document.getElementById('themes').setAttribute('href', 'themes/blue.css');
    } else if (e.target === green) {
        document.getElementById('themes').setAttribute('href', 'themes/green.css');
    } else if (e.target === light) {
        document.getElementById('themes').setAttribute('href', 'themes/light.css');
    }
});