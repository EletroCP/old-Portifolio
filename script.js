const hamburgetBtn = document.getElementById('hamburger');
const imagesCarousel = document.querySelectorAll('.development-image');

const carrousel = document.querySelector('.carousel');
    carrousel.addEventListener('wheel', (event) => {
        if(event.deltaY > 0) {
            event.target.scrollBy(300, 0);
        }
        event.target.scrollBy(-300,0);
        console.log(event.target)
    });

const openMenu = () => {
    const menuHamburger = document.getElementById('menu');
    menuHamburger.classList.toggle('exist');
}

hamburgetBtn.addEventListener('click', openMenu);

const leftArrow = document.querySelector('#left-arrow');
const rigthArrow = document.querySelector('#rigth-arrow');

leftArrow.addEventListener('click', () => {
    console.log(carrousel)
    carrousel.scrollBy(-300, 0)
})

rigthArrow.addEventListener('click', () => {
    carrousel.scrollBy(300, 0)
})