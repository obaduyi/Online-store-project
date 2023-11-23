const menu = document.querySelector('#mobile_menu');
const menuLinks =  document.querySelector('.navbar_menu');
const navLogo = document.querySelector('#navbar_logo');

//display menu
const mobileMenu = () => {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle ('active');
}

menu.addEventListener('click', mobileMenu);

//show active menu
const highlightMenu = () => {
    const elem = document.querySelector('.highlight');
    const homeMenu = document.querySelector('#home_page');
    const aboutMenu = document.querySelector('#about_page');
    const servicesMenu = document.querySelector('#services_page');
    let scrollPos = window.scrollY;
    console.log(scrollPos);

    // add highlights class to menu class
    if(window.innerWidth > 800 && scrollPos < 400){
        homeMenu.classList.add('highlight');
        aboutMenu.classList.remove('highlight');
        return;
        
    }
    else if (window.innerWidth > 960 && scrollPos < 1275){
        aboutMenu.classList.add('highlight');
        homeMenu.classList.remove('highlight');
        servicesMenu.classList.remove('highlight');
        return;
    }
    else if (window.innerWidth > 960 && scrollPos < 2345){
        servicesMenu.classList.add('highlight');
        aboutMenu.classList.remove('highlight');
        return;
    }

    if((elem && window.innerWidth < 960 && scrollPos < 0) || elem){
        elem.classList.remove('highlight');
    }
}

window.addEventListener('scroll', highlightMenu);
window.addEventListener('click', highlightMenu);

// close mobile menu after clicking
const hideMobileMenu = () => {
    const menuBars = document.querySelector('.is-active');
    if(window.innerWidth <= 768 && menuBars){
        menu.classList.toggle('is-active');
        menuLinks.classList.remove('active');
    }
};

menuLinks.addEventListener('click', hideMobileMenu);
navLogo.addEventListener('click', hideMobileMenu);
