const toggleButton = document.getElementById('theme-toggle');
const eelistus = 'eelistatud-valgus';

if (localStorage.getItem(eelistus) === 'light') {
    document.body.classList.add('light-mode');
}

function updateToggleButton() {
    const isLight = document.body.classList.contains('light-mode');

    if (isLight) {
        toggleButton.textContent = '🌙';
    } else {
        toggleButton.textContent = '🌞';
    }

    toggleButton.setAttribute('aria-pressed', isLight);
}

toggleButton.addEventListener('click', function() {
    const isLight = document.body.classList.toggle('light-mode');
    localStorage.setItem(eelistus, isLight ? 'light' : 'dark');
    updateToggleButton();
});

updateToggleButton();

/*Allikas: https://www.digitalocean.com/community/tutorials/how-to-add-javascript-to-html*/
/*Allikas2: https://javascript.plainenglish.io/build-a-dark-mode-toggle-with-javascript-and-localstorage-8022b492fb9e*/