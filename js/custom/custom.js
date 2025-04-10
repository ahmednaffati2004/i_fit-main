jQuery(document).ready(function($) {
    if (revapi1078) {
        revapi1078.bind("revolution.slide.onloaded",function (e) {
            revapi1078.setOption('height', 600);
            revapi1078.setOption('fullScreenOffsetContainer', "");
        });
    }
});

$(window).on('load', function() {
    // Hide preloader when all content is loaded
    $('#status').fadeOut();
    $('#preloader').delay(350).fadeOut('slow');
    $('body').delay(350).css({'overflow':'visible'});
});

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

    // Improved Typewriter effect that keeps text visible
    const text = "سجل الآن في برنامج لو كارب";
    const header = $('.form-header h3');
    header.text('');
    
    let charIndex = 0;
    function typeWriter() {
        if (charIndex < text.length) {
            const char = text[charIndex];
            const delay = Math.random() * 50 + 80; // Random delay between 80-130ms
            
            // Add new character with glow effect
            const span = $('<span>')
                .text(char)
                .css({
                    'opacity': '0',
                    'display': 'inline-block',
                    'transform': 'translateY(-10px)',
                    'text-shadow': '0 0 20px rgba(2,154,12,0.8)'
                });
            
            header.append(span);
            
            // Animate the character appearance
            span.animate({
                opacity: 1,
                transform: 'translateY(0)'
            }, 200);
            
            charIndex++;
            setTimeout(() => {
                span.css({
                    'text-shadow': '',
                    'transition': 'text-shadow 0.3s ease'
                });
            }, 300);
            
            setTimeout(typeWriter, delay);
        } else {
            // After typing is complete, add the permanent animation class
            header.addClass('typing');
            startPermanentAnimation();
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