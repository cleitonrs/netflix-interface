// Carousel script
$('.owl-carousel').owlCarousel({
  loop: true,
  margin: 10,
  nav: false,
  responsive: {
      0:{
          items:2
      },
      600:{
          items:3
      },
      1000:{
          items:5
      }
  }
})

// Logo container script
const logoContainer = document.querySelector('.logo-container')

window.addEventListener('scroll', () => {
    if(window.scrollY >= 100) {
        logoContainer.classList.add('logo-container-black')
    } else {
        logoContainer.classList.remove('logo-container-black')
    }
})

// Modal script
const openTrailer = document.getElementById('openTrailer')
const open = document.getElementById('open')
const modal_container = document.getElementById('modal_container')
const modal_container2 = document.getElementById('modal_container2')
const closeTrailer = document.getElementById('closeTrailer')
const close = document.getElementById('close')

openTrailer.addEventListener('click', () => {
    modal_container2.classList.add('show')
})

open.addEventListener('click', () => {
    modal_container.classList.add('show')
})

closeTrailer.addEventListener('click', () => {
    modal_container2.classList.remove('show')
})

close.addEventListener('click', () => {
    modal_container.classList.remove('show')
})