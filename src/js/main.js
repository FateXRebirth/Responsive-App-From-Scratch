var menu = document.getElementsByClassName('nav__menu')[0];
var close = document.getElementsByClassName('nav__close')[0];
var nav = document.getElementsByClassName('menu')[0];

menu.addEventListener('click', openMenu);
close.addEventListener('click', closeMenu);

function openMenu(event) {
    event.preventDefault();
    menu.setAttribute('class','nav__menu unclicked');
    close.setAttribute('class', 'nav__close clicked');
    nav.setAttribute('class', 'menu active');
}

function closeMenu(event) {
    event.preventDefault();
    menu.setAttribute('class','nav__menu clicked');
    close.setAttribute('class', 'nav__close unclicked');
    nav.setAttribute('class', 'menu inactive');
}

