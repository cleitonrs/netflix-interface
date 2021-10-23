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

const logoContainer = document.querySelector('.logo-container')

window.addEventListener('scroll', () => {
    if(window.scrollY >= 100) {
        logoContainer.classList.add('logo-container-black')
    } else {
        logoContainer.classList.remove('logo-container-black')
    }
})