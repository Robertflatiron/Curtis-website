const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const navLogo = document.querySelector('#navbar__logo');
const services = document.querySelector('.services')
const exploreButton = document.querySelector('.explore_btn')
const contact = document.querySelector('.contact')
const callEmailButton = document.querySelector('.about_btn')

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

    if(window.innerWidth > 1300 && scrollPos < 600) {
        homeMenu.classList.add('highlight')
        aboutMenu.classList.remove('highlight')
        return
    } else if (window.innerWidth > 1300 && scrollPos < 1400) {
        aboutMenu.classList.add('highlight')
        homeMenu.classList.remove('highlight')
        servicesMenu.classList.remove('highlight')
        return
    } else if (window.innerWidth > 1300 && scrollPos < 2000) {
        servicesMenu.classList.add('highlight')
        aboutMenu.classList.remove('highlight')
        contactMenu.classList.remove('highlight')
        return
    } else if (window.innerWidth > 1300 && scrollPos > 2000) {
        contactMenu.classList.add('highlight')
        servicesMenu.classList.remove('highlight')
        return
    }

    if((bar && window.innerWidth < 1300 && scrollPos < 600) || bar) {
        bar.classList.remove('highlight')
    }
}

window.addEventListener('scroll', highlightMenu)
window.addEventListener('click', highlightMenu)

// close mobile menu when clicking on a menu icon

const hideMobileMenu = () => {
    const menuBars = document.querySelector('.is-active')
    if(window.innerWidth <= 768 && menuBars) {
        menu.classList.toggle('is-active')
        menuLinks.classList.remove('active')
    }
}

menuLinks.addEventListener('click', hideMobileMenu)
navLogo.addEventListener('click', hideMobileMenu)

// Explore button navigates customer to services-page

const exploreButtonClick = () => {
    // console.log('clicked')
    exploreButton.services__wrapper
}
exploreButtonClick.addEventListener('click', exploreButton)

//Call or Email button navigates customer to contact page

const callEmailButtonClick = () => {
    callEmailButton.contact
}
callEmailButtonClick.addEventListener('click', callEmailButton)


