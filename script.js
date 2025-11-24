// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const navHeight = document.querySelector('.nav').offsetHeight;
            const targetPosition = target.offsetTop - navHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Navbar background on scroll
const nav = document.querySelector('.nav');
let lastScrollY = window.scrollY;

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        nav.style.background = 'rgba(255, 255, 255, 0.95)';
        nav.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.08)';
    } else {
        nav.style.background = 'rgba(255, 255, 255, 0.8)';
        nav.style.boxShadow = 'none';
    }
    lastScrollY = window.scrollY;
});

// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe skill cards
document.querySelectorAll('.skill-card').forEach((card, index) => {
    card.classList.add('animate-on-scroll');
    card.style.transitionDelay = `${index * 0.1}s`;
    observer.observe(card);
});

// Observe project showcases
document.querySelectorAll('.project-showcase').forEach((project, index) => {
    project.style.animationDelay = `${index * 0.2}s`;
});

// Observe experience cards
document.querySelectorAll('.experience-card').forEach((card, index) => {
    card.classList.add('animate-on-scroll');
    card.style.transitionDelay = `${index * 0.1}s`;
    observer.observe(card);
});

// Add parallax effect to hero section
window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    const hero = document.querySelector('.hero-content');
    if (hero && scrolled < window.innerHeight) {
        hero.style.transform = `translateY(${scrolled * 0.3}px)`;
        hero.style.opacity = 1 - (scrolled / window.innerHeight);
    }
});

// Add active state to navigation links
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-menu a');

window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= (sectionTop - 100)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Mobile menu toggle (if needed in future)
const createMobileMenu = () => {
    const nav = document.querySelector('.nav-container');
    const menuButton = document.createElement('button');
    menuButton.classList.add('mobile-menu-toggle');
    menuButton.innerHTML = '☰';
    menuButton.style.display = 'none';

    if (window.innerWidth <= 480) {
        menuButton.style.display = 'block';
    }

    menuButton.addEventListener('click', () => {
        const menu = document.querySelector('.nav-menu');
        menu.classList.toggle('active');
    });
};

// Initialize on load
window.addEventListener('load', () => {
    // Add smooth entrance animation to hero
    const hero = document.querySelector('.hero-content');
    hero.style.animation = 'fadeInUp 1s ease-out';

    // Log performance metrics (optional)
    console.log('Portfolio loaded successfully');
});

// Add cursor effect for interactive elements
const addCursorEffect = () => {
    const buttons = document.querySelectorAll('.btn-primary, .btn-secondary, .skill-card, .experience-card');

    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transition = 'transform 0.3s ease';
        });

        button.addEventListener('mouseleave', function() {
            this.style.transform = '';
        });
    });
};

addCursorEffect();

// Lazy loading for project images (when real images are added)
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.classList.add('loaded');
                    imageObserver.unobserve(img);
                }
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// Performance optimization: Debounce scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debouncing to scroll-heavy operations
const debouncedScroll = debounce(() => {
    // Any heavy scroll operations can go here
}, 10);

window.addEventListener('scroll', debouncedScroll);
