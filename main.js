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
    emailjs.sendForm('service_fqelw6c', 'template_iawjnxg', '#contact-form', 'LNrpj69S0h9V-6GH_')
    .then(()=> {
        //show sent message
        contactMessage.textContent = 'message sent successfully✅'
        // Remove message after five seconds
        setTimeout(()=>{
            contactMessage.textContent=''

        }, 5000)
        // clear input fields
        contactForm.reset()
    }, ()=>{
        // show error message
        contactMessage.textContent = 'message not sent (service error)❌'

    })
}

contactForm.addEventListener('submit', sendEmail)
/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp =()=>{
    const scrollUp=document.getElementById('scroll-up')
    // when the scroll is higher than 350 viewport height , add the show-scroll class to 
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
    : scrollUp.classList.remove('show-scroll')
}

window.addEventListener('scroll', scrollUp)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section[id]');
    const scrollActive = () => {
        const scrollY = window.pageYOffset;
        sections.forEach(current => {
            const sectionHeight = current.offsetHeight,
                sectionTop = current.offsetTop - 58,
                sectionId = current.getAttribute('id'),
                sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']');

            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                sectionsClass.classList.add('active-link');
            } else {
                sectionsClass.classList.remove('active-link');
            }
        });
    };

    window.addEventListener('scroll', scrollActive);
});


/*=============== SCROLL REVEAL ANIMATION ===============*/