/*=============== SHOW MENU ===============*/
const navMenu=document.getElementById('nav-menu'),
navToggle=document.getElementById('nav-toggle'),
navClose=document.getElementById('nav-close')

/*=============== MENU show ===============*/
/*validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click',()=>{
        navMenu.classList.add('show-menu')
    })
}

/*===============MENU HIDDEN ===============*/
/*validate if constant exists */
if(navClose){
    navClose.addEventListener('click',()=>{
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink=document.querySelectorAll('.nav__link')

const linkAction = ()=>{
    const navMenu=document.getElementById('nav-menu')
    //when we click in each nav__link , we remove the show menu
    navMenu.classList.remove('show-menu') 
}

navLink.forEach(n => n.addEventListener('click',linkAction))


/*=============== ADD BLUR TO HEADER ===============*/
const blurHeader=()=>{
    const header =document.getElementById('header')
    // when the scroll is greater than 50 viewport height , add the scroll-header class
    this.scrollY >= 50 ? header.classList.add('blur-header')
    :header.classList.remove('blur-header')
}
window.addEventListener('scroll',blurHeader)

/*=============== EMAIL JS ===============*/
const contactForm=document.getElementById('contact-form'),
contactMessage=document.getElementById('contact-message')
const sendEmail=(e)=>{
    e.preventDefault()
    // serviceID - templateID - #form - publickey
    emailjs.sendForm('service_fqelw6c', 'template_iawjnxg', '#contact')
}

contactForm.addEventListener('submit', sendEmail)
/*=============== SHOW SCROLL UP ===============*/ 


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== SCROLL REVEAL ANIMATION ===============*/