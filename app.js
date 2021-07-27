 /* menu show n hidden */

const navMenu = document.getElementById('nav-menu'),
toggleMenu = document.getElementById('nav-toggle'),
closeMenu = document.getElementById('nav-close')
 

// Show
toggleMenu.addEventListener('click',()=>{
    navMenu.classList.toggle('show')
})

// hidden
closeMenu.addEventListener('click',()=>{
    navMenu.classList.remove('show')
})

/* Remove menu */
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click' , linkAction))

/* Scroll sec */
const sections = document.querySelectorAll('section[id]')

window.addEventListener('scroll' , scrollActive)

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*='+ sectionId + ']').classList.add('active')
        }else{
            document.querySelector('.nav__menu a[href*='+ sectionId + ']').classList.remove('active')
        }
    })
}

/* SCROLL ANIMATION */
const  sr= ScrollReveal({
    origin :'top',
    distance :'80px',
    duration : 2000,
    reset : true,
})

/* SCROLL HOME */
sr.reveal('.home__title',{})
sr.reveal('.button',{delay:200})
sr.reveal('.home__profession',{delay:400})
sr.reveal('.home__img',{delay:600})
sr.reveal('.home__social-link',{interval:350})

/* SCROLL ABOUT */
sr.reveal('.about__img',{})
sr.reveal('.about__information',{delay:200})
sr.reveal('.about__description',{delay:400})
sr.reveal('.section-title',{delay:600})

/* SKILLS */
sr.reveal('.skills__content',{})
sr.reveal('.education__content',{delay:200})

/* WORKS */
sr.reveal('.works__img',{delay:200})
sr.reveal('.project__description',{delay:300})
sr.reveal('.project__img',{delay:400})


/* CONTACT */
sr.reveal('.social1',{})
sr.reveal('.contact',{delay:200})
sr.reveal('.contact-box',{delay:400})


/* Contact form firebase
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAG17yrJ8WzIXi8Po1egxShC5le99EBjWw",
    authDomain: "portfolio31-4d258.firebaseapp.com",
    projectId: "portfolio31-4d258",
    storageBucket: "portfolio31-4d258.appspot.com",
    messagingSenderId: "1082749790445",
    appId: "1:1082749790445:web:b13b784f99a2c6f841c4e4"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

// reference messages collection
var messagesRef = firebase.database().ref('messages');

//listen for form submit
document.getElementById('contactform').addEventListener('submit' , submitform);

//submit form
function submitform(e){
    e.preventDefault();

    // get values
    var name = getInputVal('name');
    var email = getInputVal('email');
    var phone = getInputVal('phone');


    //save message
   saveMessage(name , email , phone);
}   

//function to get  form values
function getInputVal(id){
    return document.getElementById(id).value;
}

// save messages to firebase
function saveMessage(name , email , phone){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        name : name,
        email : email,
        phone : phone,
    });
}

*/