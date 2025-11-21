// Main JavaScript for Challenger GYM Landing Page

// DOM Elements
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');
const header = document.getElementById('header');
const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');

// Mobile Menu Toggle
if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenuBtn.classList.toggle('active');
        mobileMenu.classList.toggle('active');
    });
}

// Close mobile menu when clicking on a link
document.querySelectorAll('.mobile-nav-link').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenuBtn.classList.remove('active');
        mobileMenu.classList.remove('active');
    });
});

// Header Scroll Effect
let lastScroll = 0;
window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    } else {
        header.style.boxShadow = '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)';
    }
    
    // Hide/Show header on scroll (optional)
    if (currentScroll > lastScroll && currentScroll > 500) {
        // Scrolling down
        header.style.transform = 'translateY(-100%)';
    } else {
        // Scrolling up
        header.style.transform = 'translateY(0)';
    }
    
    lastScroll = currentScroll;
});

// Smooth Scrolling for Navigation Links
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');
        if (href.startsWith('#')) {
            e.preventDefault();
            const targetId = href.substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                const headerHeight = header.offsetHeight;
                const targetPosition = targetSection.offsetTop - headerHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                mobileMenuBtn.classList.remove('active');
                mobileMenu.classList.remove('active');
            }
        }
    });
});

// Initialize Swiper for Voice Slider (only if .voice-slider exists)
const voiceSliderElement = document.querySelector('.voice-slider');
if (voiceSliderElement && typeof Swiper !== 'undefined') {
    const voiceSwiper = new Swiper('.voice-slider', {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            640: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
        },
    });
}

// Intersection Observer for Fade-in Animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all sections and cards for animation
document.querySelectorAll('section, .class-card, .feature-card, .trainer-card, .pricing-card').forEach(el => {
    observer.observe(el);
});

// LINE Reservation Function
function openLineReservation(event) {
    event.preventDefault();
    // Challenger GYM official LINE account
    const lineUrl = 'https://line.me/R/ti/p/@560yvwcw';
    window.open(lineUrl, '_blank');
}

// Form Validation (if contact form is added later)
function validateForm(form) {
    const inputs = form.querySelectorAll('input[required], textarea[required]');
    let isValid = true;
    
    inputs.forEach(input => {
        if (!input.value.trim()) {
            input.classList.add('error');
            isValid = false;
        } else {
            input.classList.remove('error');
        }
    });
    
    return isValid;
}

// Lazy Loading for Images (optional performance enhancement)
const lazyImages = document.querySelectorAll('img[data-src]');
const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
            imageObserver.unobserve(img);
        }
    });
});

lazyImages.forEach(img => {
    imageObserver.observe(img);
});

// Add loading state for buttons
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function() {
        if (!this.classList.contains('loading')) {
            // Add loading state for async actions
            if (this.href && this.href.includes('tel:')) {
                // Phone links don't need loading state
                return;
            }
        }
    });
});

// Parallax Effect removed to prevent overlapping on mobile

// Counter Animation for Stats (if needed)
function animateCounter(el, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        el.textContent = Math.floor(progress * (end - start) + start);
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}

// Initialize counters when they come into view
const counters = document.querySelectorAll('[data-counter]');
const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const counter = entry.target;
            const endValue = parseInt(counter.dataset.counter);
            animateCounter(counter, 0, endValue, 2000);
            counterObserver.unobserve(counter);
        }
    });
});

counters.forEach(counter => {
    counterObserver.observe(counter);
});

// Handle hash in URL on page load
window.addEventListener('DOMContentLoaded', () => {
    if (window.location.hash) {
        setTimeout(() => {
            const targetId = window.location.hash.substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                const headerHeight = header.offsetHeight;
                const targetPosition = targetSection.offsetTop - headerHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        }, 100);
    }
    
    // Add smooth transition to header after page load
    setTimeout(() => {
        header.style.transition = 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out';
    }, 100);
});

// Google Maps Integration (placeholder for actual implementation)
function initMap() {
    // This function would be called when Google Maps API is loaded
    // Challenger GYM actual location
    const gymLocation = { lat: 35.7394741, lng: 139.4669134 };
    
    // Map initialization code would go here
    console.log('Map initialized with location:', gymLocation);
}

// Performance monitoring (optional)
if ('performance' in window) {
    window.addEventListener('load', () => {
        const perfData = window.performance.timing;
        const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
        console.log(`Page load time: ${pageLoadTime}ms`);
        
        // Send to analytics if needed
        if (typeof gtag !== 'undefined') {
            gtag('event', 'timing_complete', {
                'name': 'load',
                'value': pageLoadTime,
                'event_category': 'Performance'
            });
        }
    });
}

// Service Worker Registration (for PWA support - optional)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => console.log('ServiceWorker registered'))
            .catch(err => console.log('ServiceWorker registration failed'));
    });
}

// Accessibility: Handle keyboard navigation
document.addEventListener('keydown', (e) => {
    // Close mobile menu on Escape
    if (e.key === 'Escape' && mobileMenu.classList.contains('active')) {
        mobileMenuBtn.classList.remove('active');
        mobileMenu.classList.remove('active');
    }
    
    // Tab trap for mobile menu when open
    if (e.key === 'Tab' && mobileMenu.classList.contains('active')) {
        const focusableElements = mobileMenu.querySelectorAll('a, button');
        const firstFocusable = focusableElements[0];
        const lastFocusable = focusableElements[focusableElements.length - 1];
        
        if (e.shiftKey && document.activeElement === firstFocusable) {
            e.preventDefault();
            lastFocusable.focus();
        } else if (!e.shiftKey && document.activeElement === lastFocusable) {
            e.preventDefault();
            firstFocusable.focus();
        }
    }
});

// Print current year in footer
const yearElements = document.querySelectorAll('.current-year');
yearElements.forEach(el => {
    el.textContent = new Date().getFullYear();
});

// Floating CTA visibility control
const floatingCta = document.getElementById('floatingCta');
let lastScrollPosition = 0;

if (floatingCta) {
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        // 全てのページのヒーローセクションに対応
        const heroSection = document.querySelector('.hero') || 
                           document.querySelector('.page-header-section') || 
                           document.querySelector('.kids-hero');
        const footer = document.querySelector('.footer');
        const heroHeight = heroSection ? heroSection.offsetHeight : 800;
        
        // フッター位置を取得
        const footerTop = footer ? footer.offsetTop : document.body.scrollHeight;
        const windowHeight = window.innerHeight;
        const scrollBottom = currentScroll + windowHeight;
        
        // ヒーローセクションを過ぎたら表示
        // ただし、フッターに到達したら非表示
        if (currentScroll > heroHeight - 200 && scrollBottom < footerTop - 100) {
            floatingCta.classList.add('visible');
        } else {
            floatingCta.classList.remove('visible');
        }
        
        lastScrollPosition = currentScroll;
    });
}

console.log('Challenger GYM - Website initialized successfully! 💪');