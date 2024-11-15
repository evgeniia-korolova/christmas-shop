export default function toggleBurger() {

    const burgerBtn = document.querySelector('.hamburger-open');
    
    const menu = document.querySelector('.navigation');
    const burgerSpans = document.querySelectorAll('.humburger__line');
    
    burgerBtn.addEventListener('click', () => {
        menu.classList.toggle('is-open');
        document.body.classList.toggle('no-scroll');
    })
}



