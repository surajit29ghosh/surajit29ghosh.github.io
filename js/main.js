/**
* Mobile nav toggle
*/
document.addEventListener('DOMContentLoaded', function () {
    // Handle mobile nav toggle
    const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
    const navbar = document.querySelector('.navbar');

    if (mobileNavToggle) {
        mobileNavToggle.addEventListener('click', function () {
            navbar.parentElement.classList.toggle('navbar-mobile');
        });
    }

    // Close mobile nav when links are clicked
    document.querySelectorAll('.navbar a').forEach(function (link) {
        link.addEventListener('click', function () {
            if (navbar.parentElement.classList.contains('navbar-mobile')) {
                navbar.parentElement.classList.remove('navbar-mobile');
            }
        });
    });

    // Scroll to top button
    const backToTopBtn = document.querySelector('.back-to-top');
    if (backToTopBtn) {
        backToTopBtn.addEventListener('click', function (e) {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });

        window.addEventListener('scroll', function () {
            if (window.pageYOffset > 100) {
                backToTopBtn.classList.add('active');
            } else {
                backToTopBtn.classList.remove('active');
            }
        });
    }

    // Smooth scroll for anchor links
    document.querySelectorAll('a.scrollto').forEach(function (link) {
        link.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            const target = document.querySelector(href);

            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Header scroll effect
    const header = document.querySelector('#header');
    if (header) {
        window.addEventListener('scroll', function () {
            if (window.pageYOffset > 100) {
                header.classList.add('header-scrolled');
            } else {
                header.classList.remove('header-scrolled');
            }
        });
    }

    // Preloader
    const preloader = document.querySelector('#preloader');
    if (preloader) {
        window.addEventListener('load', function () {
            preloader.style.display = 'none';
        });
    }
});
