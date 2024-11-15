export default function toggleBurger() {

    const burgerBtn = document.querySelector('.hamburger-open');    
    const menu = document.querySelector('.navigation');    
    const navLinks = document.querySelectorAll('.nav__link');
    
    burgerBtn.addEventListener('click', () => {
        menu.classList.toggle('is-open');
        document.body.classList.toggle('no-scroll');
    })

    navLinks.forEach((element) => {
			element.addEventListener('click', function () {
				menu.classList.remove('is-open');
				document.body.classList.toggle('no-scroll');
			});
		});
}



