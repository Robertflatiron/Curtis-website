const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const navLogo = document.querySelector('#navbar__logo');

// Display mobile menu
const mobileMenu = () => {
    menu.classList.toggle('is-active')
    menuLinks.classList.toggle('active')
}
menu.addEventListener('click', mobileMenu);

// Show active menu when scrolling

const highlightMenu = () => {
    const bar = document.querySelector('.highlight')
    const homeMenu = document.querySelector('#home-page')
    const aboutMenu = document.querySelector('#about-page')
    const servicesMenu = document.querySelector('#services-page')
    const contactMenu = document.querySelector('#contact-page')
    let scrollPos = window.scrollY
    // console.log(scrollPos)

    //adds 'highlight' class to my menu items

    if(window.innerWidth > 960 && scrollPos < 600) {
        homeMenu.classList.add('highlight')
        aboutMenu.classList.remove('highlight')
        return
    } else if (window.innerWidth > 960 && scrollPos < 1500) {
        aboutMenu.classList.add('highlight')
        homeMenu.classList.remove('highlight')
        servicesMenu.classList.remove('highlight')
        return
    } else if (window.innerWidth > 960 && scrollPos < 2900) {
        servicesMenu.classList.add('highlight')
        aboutMenu.classList.remove('highlight')
        contactMenu.classList.remove('highlight')
        return
    } else if (window.innerWidth > 960 && scrollPos < 5000) {
        servicesMenu.classList.remove('highlight')
        contactMenu.classList.add('highlight')
        return
    }

    if((bar && window.innerWidth < 960 && scrollPos < 600) || bar) {
        bar.classList.remove('highlight')
    }
}

window.addEventListener('scroll', highlightMenu)
window.addEventListener('click', highlightMenu)