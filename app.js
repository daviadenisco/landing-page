let hamburgerMenu = document.getElementById('hamburger-menu');
let hamburgerMenuOptions = document.getElementById('hamburger-menu-options');

hamburgerMenu.addEventListener('click', () => handleClick());

function handleClick() {
  hamburgerMenu.classList.add('hide');
  hamburgerMenu.classList.remove('hide');
}
