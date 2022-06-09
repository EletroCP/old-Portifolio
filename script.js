const hamburgetBtn = document.getElementById('hamburger');

function openMenu() {
    const menuHamburger = document.getElementById('menu');
    menuHamburger.classList.toggle('exist')
}

hamburgetBtn.addEventListener('click', openMenu);