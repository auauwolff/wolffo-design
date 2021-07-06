gsap.registerPlugin(ScrollTrigger);
var tl = gsap.timeline();

tl.from('.content', {
    y: '-30%',
    opacity: 0,
    duration: 2,
    ease: Power4.easeOut
})
tl.from('.stagger1', {
    opacity: 0,
    y: -50,
    stagger: .3,
    ease: Power4.easeOut,
    duration: 2
}, "-=1.5")
tl.from('.hero-design', {
    opacity: 0, y: 50, ease: Power4.easeOut, duration: 1
}, "-=2")

gsap.from(".square-anim", {
    stagger: .2,
    scale: 0.1,
    duration: 1,
    ease: Back.easeOut.config(1.7)
})

gsap.from(".transition2", {
    scrollTrigger: {
        trigger: '.transition2',
        start: "top bottom"
    },
    y: 50,
    opacity: 0,
    duration: 1.2,
    stagger: .3
})

gsap.from(".transition3", {
    scrollTrigger: {
        trigger: ".transition3",
        start: "top center"
    },
    y: 50,
    opacity: 0,
    duration: 1.2,
    stagger: .6
});


//------MODAL FORM-----/////

var btnContact = document.querySelectorAll(".contact");
var modalBg = document.querySelector(".modal-form");
var close = document.querySelector(".close");

const inputs = document.querySelectorAll(".input");

for (var i = 0 ; i < btnContact.length; i++) {
  btnContact[i].addEventListener('click', function () {
    modalBg.classList.add("active");
    });
}

// btnContact.addEventListener('click', function () {
// modalBg.classList.add("active");
// });

close.addEventListener('click', function () {
modalBg.classList.remove("active");
});



function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});


// var $featured = $('#featured');
// $(window).scroll(function() {
//   if ($(this).scrollTop() > 10) {
//     $featured.addClass('fade');
//   } else {
//     $featured.removeClass('fade');
//   }
// })

const [red, green, blue] = [229, 213, 250]
const featured = document.querySelector('.featured')

window.addEventListener('scroll', () => {
  let y = 1 + (window.scrollY || window.pageYOffset) / 150
  y = y < 1 ? 1 : y // ensure y is always >= 1 (due to Safari's elastic scroll)
  //const [r, g, b] = [red/y, green/y, blue/y].map(Math.round)
 // const [r, g, b] = [225, 100, 203]
  
  //featured.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
  featured.style.setProperty('--transition0', '5s')
 featured.style.setProperty('--before-left', '#ff64cb');
})

// var featured = document.querySelector('.featured');

// featured.addEventListener('mouseenter', function(){
//    featured.style.setProperty('--before-left', '#ff64cb');
// });

// featured.addEventListener('mouseleave', function(){
//   featured.style.setProperty('--before-left', '#E5D5FA');
// });