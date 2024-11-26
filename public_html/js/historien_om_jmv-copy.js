// Hent knap og menu-elementer
const burgerMenuButton = document.getElementById('burgerMenuButton');
const navMenu = document.getElementById('navMenu');

// Tilføj klik-event for at vise/skjule menuen
burgerMenuButton.addEventListener('click', () => {
    navMenu.classList.toggle('show');
});
