let navMenu = document.querySelector('.nav');
let navButton = document.querySelector('.nav__button');

navMenu.classList.remove('nav-nojs');

navButton.addEventListener('click', function () {
  if (navMenu.classList.contains('nav-closed')) {
    navMenu.classList.remove('nav-closed');
    navMenu.classList.add('nav-opened');
  } else {
    navMenu.classList.add('nav-closed');
    navMenu.classList.remove('nav-opened');
  }
});
