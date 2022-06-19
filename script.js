const hamburgetBtn = document.getElementById('hamburger');
const imagesCarousel = document.querySelectorAll('.development-image');

const carrousel = document.querySelector('.carousel');
carrousel.addEventListener('wheel', (event) => {
    if (event.deltaY > 0) {
        event.target.scrollBy(300, 0);
    }
    event.target.scrollBy(-300, 0);
});

const openMenu = () => {
    const menuHamburger = document.getElementById('menu');
    menuHamburger.classList.toggle('exist');
}

hamburgetBtn.addEventListener('click', openMenu);

const leftArrow = document.querySelector('#left-arrow');
const rigthArrow = document.querySelector('#rigth-arrow');
const leftArrow2 = document.querySelector('#left-arrow-fullscream');
const rigthArrow2 = document.querySelector('#rigth-arrow-fullscream');

leftArrow.addEventListener('click', () => {
    carrousel.scrollBy(-300, 0)
})

leftArrow2.addEventListener('click', () => {
    carrousel.scrollBy(-300, 0)
})

rigthArrow.addEventListener('click', () => {
    carrousel.scrollBy(300, 0)
})

rigthArrow2.addEventListener('click', () => {
    carrousel.scrollBy(300, 0)
})