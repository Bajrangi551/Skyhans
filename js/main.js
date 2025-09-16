(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').css('top', '0px');
        } else {
            $('.sticky-top').css('top', '-100px');
        }
    });
    
    
    // Dropdown on mouse hover
    const $dropdown = $(".dropdown");
    const $dropdownToggle = $(".dropdown-toggle");
    const $dropdownMenu = $(".dropdown-menu");
    const showClass = "show";
    
    $(window).on("load resize", function() {
        if (this.matchMedia("(min-width: 992px)").matches) {
            $dropdown.hover(
            function() {
                const $this = $(this);
                $this.addClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "true");
                $this.find($dropdownMenu).addClass(showClass);
            },
            function() {
                const $this = $(this);
                $this.removeClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "false");
                $this.find($dropdownMenu).removeClass(showClass);
            }
            );
        } else {
            $dropdown.off("mouseenter mouseleave");
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Header carousel
    $(".header-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        items: 1,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ]
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: true,
        margin: 24,
        dots: true,
        loop: true,
        nav : false,
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });
    
})(jQuery);

let section = document.querySelectorAll('section')
let navlinks = document.querySelectorAll('.navbar-nav a')

// Answer And Question java script

document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.toggle-btn');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const answer = this.parentElement.nextElementSibling;
            if (answer.style.display === 'block') {
                answer.style.display = 'none';
                this.innerHTML = '<i class="fa-regular fa-square-caret-down"></i>'; 
            } else {
                answer.style.display = 'block';
                this.innerHTML = '<i class="fa-solid fa-xmark"></i>';
            }
        });
    });
});


// end answer And Question of Java Script

document.querySelectorAll('.nav-item.nav-link').forEach(item => {
    item.addEventListener('click', function() {
        document.querySelector('.nav-item.nav-link.active').classList.remove('active');
        this.classList.add('active');
    });
});
// navbar navbar
const navLinks = document.querySelectorAll('.nav-item');

window.addEventListener('scroll', () => {
    let current = '';

    navLinks.forEach(link => {
        const section = document.querySelector(link.getAttribute('href'));
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop - sectionHeight / 3) {
            current = link.getAttribute('href');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === current) {
            link.classList.add('active');
        }
    });
});

// slider java script added

//  Alert window is here

function showAlert() {
    alert("Form submitted successfully ✓");
}

 
 
