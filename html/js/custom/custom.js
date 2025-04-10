// JavaScript Document
$(document).ready(function() {

    'use strict';

    /************************************************************************************ CAROUSEL SLIDER STARTS */

    var owl = $('.menu-carousel');
    owl.owlCarousel({

        autoplay: false,
        autoplayHoverPause: true,
        nav: false,
        dots: true,
        mouseDrag: true,
        smartSpeed: 500,
        margin: 0,
        loop: true,
        singleItem: true,
        navText: [
            "<i class='fa fa-angle-right'></i>", "<i class='fa fa-angle-left'></i>"
        ],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });

    var owl = $('.testimonial-carousel');
    owl.owlCarousel({

        autoplay: false,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        mouseDrag: true,
        smartSpeed: 500,
        margin: 0,
        loop: true,
        singleItem: true,
        navText: [
            "<i class='fa fa-angle-right'></i>", "<i class='fa fa-angle-left'></i>"
        ],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });

    var owl = $('.pics-carousel');
    owl.owlCarousel({

        autoplay: 500,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        mouseDrag: true,
        smartSpeed: 500,
        margin: 0,
        loop: true,
        singleItem: true,
        navText: [
            "<i class='fa fa-angle-right'></i>", "<i class='fa fa-angle-left'></i>"
        ],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });

    /************************************************************************************ CAROUSEL SLIDER ENDS */
	
	/************************************************************************************ PAGE ANIMATED ITEMS STARTS */

    $('.animated').each(function() {
        var elem = $(this);
        var animation = elem.data('animation');
        elem.addClass(animation + " visible");
    });

	/************************************************************************************ PAGE ANIMATED ITEMS ENDS */
	
	/************************************************************************************ ONEPAGE NAV STARTS */

    $('.nav').onePageNav({
        filter: ':not(.external)',
        begin: function() {},
        end: function() {}
    });
	
	/************************************************************************************ ONEPAGE NAV ENDS */
	
	/************************************************************************************ DATE PICKER STARTS */

    $("#datepicker").datepicker();
	
	/************************************************************************************ DATE PICKER ENDS */

    /************************************************************************************ TO TOP STARTS */

    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('.scrollup').show();
        } else {
            $('.scrollup').hide();
        }
    });

    $('.scrollup').on("click", function() {
        $("html, body").animate({
            scrollTop: 0
        }, 300);
        return false;
    });
   
    /************************************************************************************ TO TOP ENDS */
	
    /************************************************************************************ PARALLAX STARTS */

    $('.parallax-1').parallax("50%", 0.5);
    $('.parallax-2').parallax("50%", 0.1);
    $('.parallax-3').parallax("50%", 0.5);
    $('.parallax-4').parallax("50%", 0.1);
    $('.parallax-5').parallax("50%", 0.1);
    $('.parallax-6').parallax("50%", 0.1);
    $('.b-img-01').parallax("50%", 0.1);
    $('.b-img-02').parallax("50%", 0.1);
    $('.b-img-03').parallax("50%", 0.1);
    $('.b-img-04').parallax("50%", 0.1);
    $('.b-img-05').parallax("50%", 0.1);
    $('.b-img-06').parallax("50%", 0.1);
    $('.b-img-07').parallax("50%", 0.1);
    $('.b-img-08').parallax("50%", 0.1);
    $('.b-img-09').parallax("50%", 0.1);
    $('.b-img-10').parallax("50%", 0.1);
    $('.b-img-11').parallax("50%", 0.1);
    $('.b-img-12').parallax("50%", 0.1);
    $('.b-img-13').parallax("50%", 0.1);
    $('.b-img-14').parallax("50%", 0.1);
    $('.b-img-15').parallax("50%", 0.1);


    /************************************************************************************ PARALLAX ENDS */

    /************************************************************************************ FITVID STARTS */

    $(".fitvid").fitVids();

    /************************************************************************************ FITVID ENDS */


    /************************************************************************************ DROPDOWN MENU STARTS */

    $('.dropdown-toggle').dropdown();

    $(document).on('click', '.yamm .dropdown-menu', function(e) {
        e.stopPropagation()
    })

    /************************************************************************************ DROPDOWN MENU ENDS */

    // Remove preloader immediately
    $('#status').hide();
    $('#preloader').hide();
    $('body').removeClass('loading').addClass('loaded');

});

/************************************************************************************ STICKY NAV STARTS */

$(window).scroll(function() {
    if ($(this).scrollTop() > 1) {
        $('nav.fill-black').addClass("sticky").removeClass("normal");
    } else {
        $('nav.fill-black').removeClass("sticky").addClass("normal");
    }
});

/************************************************************************************ STICKY NAV ENDS */

/************************************************************************************ PRELOADER STARTS */

$(window).load(function() { // makes sure the whole site is loaded
    $('#status').fadeOut(); // will first fade out the loading animation
    $('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
});

/************************************************************************************ PRELOADER ENDS */

/************************************************************************************ MAGNIFIC POPUP STARTS */

$('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
    /*disableOn: 700,*/
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,
    fixedContentPos: false
});

$('.image-popup-vertical-fit').magnificPopup({
    type: 'image',
    closeOnContentClick: true,
    mainClass: 'mfp-img-mobile',
    image: {
        verticalFit: true
    }

});

/************************************************************************************ MAGNIFIC POPUP ENDS */


$(document).ready(function() {
    // إزالة أي مستمعي أحداث التمرير السابقة
    $(window).off('scroll');
    
    // التأكد من أن النافبار تبقى سوداء وثابتة
    $('.navbar').addClass('navbar-fixed-top');
    
    // تحديث الـ padding للجسم عند تغيير حجم النافذة
    $(window).resize(function() {
        var navHeight = $('.navbar').outerHeight();
        $('body').css('padding-top', navHeight + 'px');
    });
    
    // تعيين الـ padding الأولي
    var navHeight = $('.navbar').outerHeight();
    $('body').css('padding-top', navHeight + 'px');

    // Enhanced Typewriter effect with dynamic timing
    const text = "سجل الآن في برنامج لو كارب";
    const header = $('.form-header h3');
    header.text('');
    
    let charIndex = 0;
    function typeWriter() {
        if (charIndex < text.length) {
            const char = text[charIndex];
            const delay = Math.random() * 50 + 80; // Random delay between 80-130ms
            header.text(text.substring(0, charIndex + 1));
            charIndex++;
            
            // Add temporary glow effect on each character
            header.css('text-shadow', '0 0 20px rgba(2,154,12,0.8)');
            setTimeout(() => {
                header.css('text-shadow', '');
            }, 200);
            
            setTimeout(typeWriter, delay);
        } else {
            header.addClass('typing');
            startTextAnimation();
        }
    }
    
    function startPermanentAnimation() {
        // Add subtle floating animation to the entire text
        header.css({
            'animation': 'textFloat 4s ease-in-out infinite',
            'transform-style': 'preserve-3d',
            'background': 'linear-gradient(135deg, #ffffff 0%, #cccccc 100%)',
            '-webkit-background-clip': 'text',
            '-webkit-text-fill-color': 'transparent',
            'text-shadow': '2px 2px 4px rgba(0,0,0,0.4), 4px 4px 8px rgba(2,154,12,0.3)'
        });
    }
    
    
    // Start typewriter effect after a short delay
    setTimeout(typeWriter, 500);

    // Enhanced Icon Interaction
    const iconWrapper = $('.icon-wrapper');
    let isAnimating = false;
    
    // Add click animation with enhanced effects
    iconWrapper.on('click', function(e) {
        if (isAnimating) return;
        isAnimating = true;
        
        const icon = $(this);
        const iconCircle = icon.find('.icon-circle');
        
        // Complex pulse effect
        iconCircle.css({
            'transform': 'perspective(1000px) scale(0.95) translateZ(-10px)',
            'box-shadow': '0 5px 15px rgba(2,154,12,0.2)'
        });
        
        setTimeout(() => {
            iconCircle.css({
                'transform': 'perspective(1000px) scale(1.05) translateZ(20px)',
                'box-shadow': '0 15px 35px rgba(2,154,12,0.6)'
            });
            
            // Create multiple layers of sparkles
            createSparkleLayer(e, icon, 12, 50); // Inner layer
            setTimeout(() => createSparkleLayer(e, icon, 8, 100), 150); // Middle layer
            setTimeout(() => createSparkleLayer(e, icon, 6, 150), 300); // Outer layer
            
            setTimeout(() => {
                iconCircle.css({
                    'transform': 'perspective(1000px) scale(1) translateZ(0)',
                    'box-shadow': '0 8px 25px rgba(2,154,12,0.4)'
                });
                isAnimating = false;
            }, 450);
        }, 150);
    });
    
    // Enhanced 3D tilt effect
    iconWrapper.on('mousemove', function(e) {
        const icon = $(this);
        const iconCircle = icon.find('.icon-circle');
        const rect = icon[0].getBoundingClientRect();
        
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const maxTilt = 15;
        const angleX = ((y - centerY) / centerY) * maxTilt;
        const angleY = ((centerX - x) / centerX) * maxTilt;
        
        iconCircle.css({
            'transform': `perspective(1000px) 
                        rotateX(${angleX}deg) 
                        rotateY(${angleY}deg) 
                        translateZ(${Math.abs(angleX + angleY)}px)`,
            'box-shadow': `${-angleY}px ${angleX}px 25px rgba(2,154,12,0.4)`
        });
    });
    
    // Smooth reset on mouse leave
    iconWrapper.on('mouseleave', function() {
        const iconCircle = $(this).find('.icon-circle');
        iconCircle.css({
            'transform': 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0)',
            'box-shadow': '0 8px 25px rgba(2,154,12,0.4)',
            'transition': 'all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55)'
        });
    });
});

// Enhanced sparkle effect with layers
function createSparkleLayer(e, icon, count, radius) {
    const rect = icon[0].getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    for (let i = 0; i < count; i++) {
        const sparkle = $('<div class="sparkle"></div>');
        icon.append(sparkle);
        
        const angle = (i * (360 / count)) * Math.PI / 180;
        const velocity = 1 + Math.random() * 0.5;
        const scale = 0.6 + Math.random() * 0.4;
        
        const vx = Math.cos(angle) * velocity;
        const vy = Math.sin(angle) * velocity;
        
        sparkle.css({
            left: x + 'px',
            top: y + 'px',
            transform: `scale(${scale})`,
            background: `radial-gradient(circle at 30% 30%, 
                rgba(255,255,255,${0.6 + Math.random() * 0.4}), 
                rgba(2,154,12,${0.3 + Math.random() * 0.3}))`
        });
        
        sparkle.animate({
            left: x + vx * radius + 'px',
            top: y + vy * radius + 'px',
            opacity: 0,
            transform: `scale(${scale * 0.5}) rotate(${Math.random() * 360}deg)`
        }, {
            duration: 600 + Math.random() * 400,
            easing: 'easeOutQuart',
            complete: function() {
                sparkle.remove();
            }
        });
    }
}

// Add required CSS for enhanced animations
const style = $('<style>').text(`
    @keyframes charFloat {
        0%, 100% { transform: translateY(0) rotate(0deg); }
        50% { transform: translateY(-2px) rotate(2deg); }
    }
    
    .sparkle {
        position: absolute;
        width: 8px;
        height: 8px;
        border-radius: 50%;
        pointer-events: none;
        z-index: 10;
        mix-blend-mode: screen;
    }
`);

$('head').append(style);




document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    
    let currentSlide = 0;
    let slideInterval;
    const intervalTime = 5000;
    
    // Initialize slider
    function initSlider() {
      // Set first slide as active
      slides[0].classList.add('active');
      dots[0].classList.add('active');
      
      // Start autoplay
      startSlideInterval();
      
      // Add event listeners
      prevBtn.addEventListener('click', prevSlide);
      nextBtn.addEventListener('click', nextSlide);
      
      // Add event listeners to dots
      dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
          goToSlide(index);
        });
      });
      
      // Pause autoplay on hover
      document.querySelector('.slider-wrapper').addEventListener('mouseenter', () => {
        clearInterval(slideInterval);
      });
      
      // Resume autoplay on mouse leave
      document.querySelector('.slider-wrapper').addEventListener('mouseleave', () => {
        startSlideInterval();
      });
      
      // Add touch support
      let touchStartX = 0;
      let touchEndX = 0;
      
      const slider = document.querySelector('.slider');
      
      slider.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
      });
      
      slider.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
      });
      
      function handleSwipe() {
        const swipeThreshold = 50;
        if (touchEndX < touchStartX - swipeThreshold) {
          // Swipe left
          nextSlide();
        } else if (touchEndX > touchStartX + swipeThreshold) {
          // Swipe right
          prevSlide();
        }
      }
    }
    
    // Start autoplay
    function startSlideInterval() {
      slideInterval = setInterval(nextSlide, intervalTime);
    }
    
    // Go to previous slide
    function prevSlide() {
      goToSlide(currentSlide - 1);
    }
    
    // Go to next slide
    function nextSlide() {
      goToSlide(currentSlide + 1);
    }
    
    // Go to specific slide
    function goToSlide(slideIndex) {
      // Remove active class from current slide and dot
      slides[currentSlide].classList.remove('active');
      dots[currentSlide].classList.remove('active');
      
      // Calculate new slide index (handle wrapping)
      currentSlide = (slideIndex + slides.length) % slides.length;
      
      // Add active class to new slide and dot
      slides[currentSlide].classList.add('active');
      dots[currentSlide].classList.add('active');
      
      // Reset autoplay timer
      clearInterval(slideInterval);
      startSlideInterval();
    }
    
    // Initialize the slider
    initSlider();
    
    // Preload images for smoother transitions
    function preloadImages() {
      const slideImages = document.querySelectorAll('.slide-image');
      slideImages.forEach(slideImage => {
        const bgImg = slideImage.style.backgroundImage.match(/url$$['"]?([^'"]+)['"]?$$/);
        if (bgImg && bgImg[1]) {
          const img = new Image();
          img.src = bgImg[1];
        }
      });
    }
    
    // Preload images
    preloadImages();
    
    // Handle window resize
    window.addEventListener('resize', function() {
      // Adjust any responsive elements if needed
    });
  });