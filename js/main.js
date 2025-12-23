const swiper = new Swiper('.swiper-container', {
    // Optional parameters
    loop: true,
    slidesPerView: 1,
    navigation: {
        nextEl: '.arrow',
    },
    breakpoints: {
        540: {
            slidesPerView: 2,
        }
    }
});

const menuButton = document.querySelector('.menu-btn');
const menu = document.querySelector('.header');

menuButton.addEventListener('click', () => {
    menu.classList.toggle('header-active')
    menuButton.classList.toggle('menu-btn-active')
})