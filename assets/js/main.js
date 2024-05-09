/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toogle');
const navClose = document.getElementById('nav-close')


if(navToggle){
    
    navToggle.addEventListener('click', () => {
        console.log('toggle')
        navMenu.classList.add('show-menu')
    })
}

if(navClose){
    navClose.addEventListener('click',() =>{
        console.log('close')
        navMenu.classList.remove('show-menu')
    })
}
/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll(".nav__link");

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}

navLink.forEach(n => n.addEventListener('click', linkAction))
/*=============== SWIPER HOMES ===============*/

const swiperHome = new Swiper('.home__swiper', {
    // Optional parameters
    loop: true,
    speed:800,
    parallax:true,
    effect:'fade',
    pagination: {
      el: '.swiper-pagination',
      type: 'fraction',

    //   formatFractionCurrent: (number)=> { return '0' + number},
    //   formatFractionTotal: (number)=> { return '0' + number}
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
})