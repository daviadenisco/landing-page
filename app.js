let hamburgerMenu = document.getElementById('hamburger-menu');
let hamburgerMenuOptions = document.getElementById('hamburger-menu-options');
let close = document.getElementById('close');

hamburgerMenu.addEventListener('click', () => showHamburgerMenuOptions());
close.addEventListener('click', () => showHamburgerMenu());
