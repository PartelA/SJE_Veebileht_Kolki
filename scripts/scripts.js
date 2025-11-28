const toggleButton = document.getElementById('theme-toggle'); /* Konstant, millele on määratud theme-toggle nupp, saame selle id kaudu*/
const eelistus = 'eelistatud-valgus'; /* konstant eelistus, mis tuleb kasuks, et salvestada kasutaja dark/light mode eelistus*/

if (localStorage.getItem(eelistus) === 'light') {
    document.body.classList.add('light-mode');
} /*Mäletab theme eelistust: kui kasutaja localStorages on varem salvestatud konstant eelistus, mille väärtus on "light", siis saame rakendada lehe body elemendile light-mode class'i*/

function updateToggleButton() {
    const isLight = document.body.classList.contains('light-mode');

    if (isLight) {
        toggleButton.textContent = '🌙';
    } else {
        toggleButton.textContent = '🌞';
    }

    toggleButton.setAttribute('aria-pressed', isLight);
} /*Olenevalt theme'st on nupu sees vastav emoji, alguses vaatame, kas light-mode class on body elemendil, ja siis teeme tingimuslause, et määrata emoji. */

toggleButton.addEventListener('click', function() {
    const isLight = document.body.classList.toggle('light-mode');
    localStorage.setItem(eelistus, isLight ? 'light' : 'dark');
    updateToggleButton();
});/*Nupul on listener ehk nupu vajutamisel käivitub see funktsioon: rakendab või eemaldab light-mode klassi ja seab eelistuse localstoragesse*/

updateToggleButton();

/*Allikas: https://www.digitalocean.com/community/tutorials/how-to-add-javascript-to-html*/
/*Allikas2: https://javascript.plainenglish.io/build-a-dark-mode-toggle-with-javascript-and-localstorage-8022b492fb9e*/