'use strict';

AOS.init();
AOS.init({disable: 'mobile'});


const togglerButton = document.querySelector('.navbar-toggler');
const iconOpen = document.getElementById('icon-open');
const iconClose = document.getElementById('icon-close');
const navbarCollapse = document.getElementById('navbarNav');  // Assuming this is the collapse element

let navbarIsOpen = false;  // Keep track of whether the menu is open or not

// Handle toggler button click
togglerButton.addEventListener('click', function () {
  navbarIsOpen = !navbarIsOpen;  // Toggle the navbar open state

  if (navbarIsOpen) {
    iconOpen.style.display = 'none';
    iconClose.style.display = 'inline-block';
    navbarCollapse.classList.add('show'); // Bootstrap class to show navbar
  } else {
    iconOpen.style.display = 'inline-block';
    iconClose.style.display = 'none';
    navbarCollapse.classList.remove('show'); // Bootstrap class to hide navbar
  }
});

// Handle scrolling to hide the navbar when it's open
window.addEventListener('scroll', function () {
  if (navbarIsOpen && window.scrollY > 0) {
    // If the navbar is open and the page is scrolled, hide the navbar
    iconOpen.style.display = 'inline-block';
    iconClose.style.display = 'none';
    navbarCollapse.classList.remove('show'); // Hide the navbar
    navbarIsOpen = false; // Update the state to reflect the navbar is closed
  }
});




var swiper = new Swiper(".mySwiper", {
    loop:false,
    slidesPerView:1.3,
    spaceBetween: 15,
    slidesOffsetAfter: 10,
    slidesOffsetBefore: 10,
    breakpoints: {
        640: {
            slidesPerView:2.5,
        },
        768: {
            slidesPerView:2.5,
        },
        992: {
            slidesPerView:2.5,
            slidesOffsetBefore: 112,
        },
        1024: {
            slidesPerView:4.7,
            slidesOffsetBefore: 112,
        },
        1600: {
            slidesPerView:4.7,
            slidesOffsetBefore: 312,
        }
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });




const formSubmit = document.querySelector('form');
const formInput = document.querySelectorAll('input');

const handleSubmit = document.querySelector('#submit');

handleSubmit.addEventListener('click', function(){
    const formData = [];
    Array.from(formInput).forEach(input=>{
        if(input.value === ''){
            input.style.border = 'red solid 1px';
        }
        else{
            input.style.border = '#000 solid 1px';
        }

        input.addEventListener('input', function() {
            if (input.value !== '') {
                input.style.border = '#000 solid 1px'; 
            }
        });

        function createData(name, value){
            return {
                [name]: value
            }
        }
        console.log(input.name);
        if(input.name){
            const inputData = createData(input.name, input.value);
            Object.assign(formData, inputData)
        }

    })
    console.log(formData);
})

