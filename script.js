const hamburgetBtn = document.getElementById('hamburger');
// const imagesCarousel = document.querySelectorAll('.development-image');
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
const leftArrow2 = document.querySelector('.left-arrow-fullscream');
const rigthArrow2 = document.querySelector('.rigth-arrow-fullscream');
const projectContainer = document.getElementById('project-container');
const containerProject = document.getElementById('container-projects');
const leftArrowProject = document.getElementById('arrowProjectLeft');
const rigthArrowProject = document.getElementById('arrowProjectRigth');

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

leftArrowProject.addEventListener('click', () => {
    console.log('oi')
    projectContainer.scrollBy(-300, 0)
})

rigthArrowProject.addEventListener('click', () => {
    console.log('oi')

    projectContainer.scrollBy(300, 0)
})

const project = () => {
    for (let index = 0; index < projectsData.length; index +=1) {
        const { link, thumb, describe, name } = projectsData[index];
        const div = document.createElement('div');
        const h3 = document.createElement('h3');
        const textContaier = document.createElement('div');
        const img = document.createElement('img');

        const p = document.createElement('p');
        const a = document.createElement('a');
    
        div.classList.add('block-caroseul');
        a.setAttribute('href', link);
        a.setAttribute('target', '_blank')
        a.id = 'linkProject';
        img.setAttribute('src', thumb);
        img.setAttribute('alt', describe);

        img.classList.add('development-image');
        h3.innerText = name;
        p.innerText = describe;
        a.style.width = '100%';
        textContaier.classList.add('project-describe-container');
    
        projectContainer.appendChild(div);
        div.appendChild(textContaier);
        textContaier.appendChild(a);
        a.appendChild(h3);
        div.appendChild(img);
        textContaier.appendChild(p);
    }
    };

window.onload = () => {
    project()
}