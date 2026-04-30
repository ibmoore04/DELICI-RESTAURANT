// Initialize AOS
AOS.init({
    duration: 1000,
    once: true,
    offset: 100,
    easing: 'ease-out-cubic'
});

// Preloader
window.addEventListener('load', function() {
    const preloader = document.getElementById('preloader');
    const mainContent = document.getElementById('main-content');
    
    setTimeout(function() {
        preloader.classList.add('fade-out');
        mainContent.style.opacity = '1';
        mainContent.style.transition = 'opacity 0.6s ease';
    }, 3000); // 3 seconds
});

// Scroll to Top Button
const scrollTopBtn = document.getElementById('scrollTop');

window.addEventListener('scroll', function() {
    if (window.pageYOffset > 400) {
        scrollTopBtn.classList.add('show');
    } else {
        scrollTopBtn.classList.remove('show');
    }
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar background on scroll
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', function() {
    if (window.pageYOffset > 100) {
        navbar.style.background = 'rgba(0, 0, 0, 0.95)';
        navbar.style.transition = 'background 0.3s ease';
    } else {
        navbar.style.background = 'transparent';
    }
});
