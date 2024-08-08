const swiperHome = new Swiper('.sliders__swiper', {
  loop: true,
  speed: 800,
  parallax: true,
  effect: 'fade',

  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },

  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',

    formatFractionCurrent: (number) => { return '0' + number },
    formatFractionTotal: (number) => { return '0' + number }
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  keyboard: {
        enabled: true,
        onlyInViewport: false,
      },
});

// SCROLL REVEAL 
document.addEventListener("DOMContentLoaded", function() {
    const sr = ScrollReveal({
        origin: 'top',
        distance: '60px',
        duration: 1000,
        delay: 400,
        reset: true
    });

    
    sr.reveal('.misja__container', { delay: 200 });
    sr.reveal('.misja__content', {  origin: 'left' });
    sr.reveal('.misja__images', {  origin: 'right' });
    sr.reveal(`.contact__info`, {distance: '0px',
    origin: 'bottom',
    duration: 500,
    easing: 'ease-in-out',
    });
    sr.reveal(`.form__body, .contact__location, .contact__call`, {origin: 'right', });
});


// Header scroll effect
function scrollHeader() {
  const nav = document.getElementById('header');
  if (this.scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header');
}
window.addEventListener('scroll', scrollHeader);

// Show scroll up button
function scrollUp() {
  const scrollUp = document.getElementById('scroll-up');
  if (this.scrollY >= 560) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll');
}
window.addEventListener('scroll', scrollUp);

// Scroll sections active link
// const sections = document.querySelectorAll('section[id]');

// function scrollActive() {
//   const scrollY = window.pageYOffset;

//   sections.forEach(current => {
//     const sectionHeight = current.offsetHeight;
//     const sectionTop = current.offsetTop - 50;
//     const sectionId = current.getAttribute('id');

//     if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
//       document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link');
//     } else {
//       document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link');
//     }
//   });
// }
// window.addEventListener('scroll', scrollActive);

  document.addEventListener('DOMContentLoaded', function () {
    var swiper = new Swiper('.swiper-container', {
      loop: true,
      slidesPerView: 3.5,
      spaceBetween: 30,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },

    });
  });

  // EMAIL JS

const contactForm = document.getElementById('contact-form'),
      message = document.getElementById('contact-message'),
      contactEmail = document.getElementById('contact-user'),
      contactName = document.getElementById('name'),
      contactSubject = document.getElementById('subject'),
      contactText = document.getElementById('message'); 

const sendEmail = (e) => {
  e.preventDefault();

  if (contactName.value === '' || contactEmail.value === '' || contactSubject.value === '' || contactText.value === '') {
    message.classList.remove('color-green');
    message.classList.add('color-red');
    message.textContent = "Wprowadź wszystkie dane!";

    setTimeout(() => {
      message.textContent = '';
    }, 3000);
  } else {
    const templateParams = {
                from_name: contactName.value,
                to_name: contactEmail.value,
                subject: contactSubject.value,
                message: contactText.value,
                reply_to: contactEmail.value
            };

    emailjs.send('service_9jnox8m', 'template_4p322io', templateParams, '40hMJHRgdyiMD3ZfV')
      .then(() => {
        message.classList.remove('color-red');
        message.classList.add('color-green');
        message.textContent = 'Wiadomość została wysłana!';
        contactForm.reset();

        setTimeout(() => {
      message.textContent = '';
    }, 3000);
      })
      .catch((error) => {
        message.classList.remove('color-green');
        message.classList.add('color-red');
        message.textContent = 'Błąd wysyłki wiadomości. Spróbuj ponownie później';

        setTimeout(() => {
      message.textContent = '';
    }, 3000);
      });
  }
}

contactForm.addEventListener('submit', sendEmail);



