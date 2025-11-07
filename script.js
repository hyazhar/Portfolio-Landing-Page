let hamburger = document.querySelector('.hamburger');
let menus = document.querySelector('.menus');
let extra_icons = document.querySelector('.extra-icon');
hamburger.addEventListener('click', function() {
    menus.style.display = menus.style.display === 'block' ? 'none' : 'block';
    extra_icons.style.display = extra_icons.style.display === 'flex' ? 'none' : 'flex';
});