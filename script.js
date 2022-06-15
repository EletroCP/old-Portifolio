const hamburgetBtn = document.getElementById('hamburger');
const imagesCarousel = document.querySelectorAll('.development-image');
const carrousel = document.querySelector('#carousel')
    .addEventListener('wheel', (event) => {
        if(event.deltaY > 0) {
            event.target.scrollBy(300, 0)
        }
        event.target.scrollBy(-300,0)
    })

const openMenu = () => {
    const menuHamburger = document.getElementById('menu');
    menuHamburger.classList.toggle('exist')
}

hamburgetBtn.addEventListener('click', openMenu);