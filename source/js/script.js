let navMenu = document.querySelector('.nav');
let navButton = document.querySelector('.nav__button');

navMenu.classList.remove('nav__nojs');

navButton.addEventListener('click', function () {
  if (navMenu.classList.contains('nav-menu__closed')) {
    navMenu.classList.remove('nav-menu__closed');
    navMenu.classList.add('nav-menu__opened');
  } else {
    navMenu.classList.add('nav-menu__closed');
    navMenu.classList.remove('nav-menu__opened');
  }
});
