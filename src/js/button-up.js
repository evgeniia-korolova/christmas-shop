export function handleButtonUp() {
    const buttonUp = document.querySelector('.arrow-up__btn');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            buttonUp.classList.add('arrow-up__visible');
        } else {
            buttonUp.classList.remove('arrow-up__visible');
        }
    })

    buttonUp.addEventListener('click', () => {
        window.scrollTo(0, 0);
    })
}