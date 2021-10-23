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
const open = document.getElementById('open')
const modal_container = document.getElementById('modal_container')
const close = document.getElementById('close')

open.addEventListener('click', () => {
    modal_container.classList.add('show')
})

close.addEventListener('click', () => {
    modal_container.classList.remove('show')
})