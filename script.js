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
        }
    });
}, observerOptions);

// Observe education cards
document.querySelectorAll('.education-card').forEach((card, index) => {
    card.classList.add('animate-on-scroll');
    card.style.transitionDelay = `${index * 0.1}s`;
    observer.observe(card);
});

// Observe skill categories
document.querySelectorAll('.skill-category').forEach((category, index) => {
    category.classList.add('animate-on-scroll');
    category.style.transitionDelay = `${index * 0.05}s`;
    observer.observe(category);
});

// Observe experience items
document.querySelectorAll('.experience-item').forEach((item, index) => {
    item.classList.add('animate-on-scroll');
    item.style.transitionDelay = `${index * 0.1}s`;
    observer.observe(item);
});

// Observe project cards
document.querySelectorAll('.project-card').forEach((card, index) => {
    card.classList.add('animate-on-scroll');
    card.style.transitionDelay = `${index * 0.15}s`;
    observer.observe(card);
});

// Observe publication cards
document.querySelectorAll('.publication-card').forEach((card, index) => {
    card.classList.add('animate-on-scroll');
    card.style.transitionDelay = `${index * 0.1}s`;
    observer.observe(card);
});

// Observe contact cards
document.querySelectorAll('.contact-card').forEach((card, index) => {
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
        hero.style.opacity = 1 - (scrolled / (window.innerHeight * 1.2));
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

// Animate stats on scroll
const animateStats = () => {
    const stats = document.querySelectorAll('.stat-number');

    stats.forEach(stat => {
        const target = stat.textContent;
        const isPercentage = target.includes('%');
        const isK = target.includes('k');

        let numericValue;
        if (isPercentage) {
            numericValue = parseInt(target);
        } else if (isK) {
            numericValue = parseInt(target) * 1000;
        } else {
            numericValue = parseInt(target);
        }

        if (!isNaN(numericValue)) {
            let current = 0;
            const increment = numericValue / 50;
            const timer = setInterval(() => {
                current += increment;
                if (current >= numericValue) {
                    current = numericValue;
                    clearInterval(timer);
                }

                if (isPercentage) {
                    stat.textContent = Math.floor(current) + '%';
                } else if (isK) {
                    stat.textContent = Math.floor(current / 1000) + 'k+';
                } else {
                    stat.textContent = Math.floor(current) + '%';
                }
            }, 30);
        }
    });
};

// Trigger stats animation when they come into view
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateStats();
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

const statsContainer = document.querySelector('.stats-container');
if (statsContainer) {
    statsObserver.observe(statsContainer);
}

// Add cursor effect for interactive elements
const addCursorEffect = () => {
    const buttons = document.querySelectorAll('.btn-primary, .btn-secondary, .education-card, .project-card, .publication-card, .contact-card');

    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
        });

        button.addEventListener('mouseleave', function() {
            this.style.transform = '';
        });
    });
};

// Terminal text animation
const animateTerminalText = () => {
    const terminal = document.querySelector('.terminal-text');
    if (terminal) {
        const text = terminal.textContent;
        terminal.textContent = '';
        let i = 0;

        const typeWriter = () => {
            if (i < text.length) {
                terminal.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            }
        };

        setTimeout(typeWriter, 1000);
    }
};

// Initialize on load
window.addEventListener('load', () => {
    // Add smooth entrance animation to hero
    const hero = document.querySelector('.hero-content');
    if (hero) {
        hero.style.animation = 'fadeInUp 1s ease-out';
    }

    // Initialize cursor effects
    addCursorEffect();

    // Animate terminal text
    animateTerminalText();

    // Log performance metrics (optional)
    console.log('Portfolio loaded successfully');
});

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

// Mobile menu functionality (if needed in future)
const createMobileMenu = () => {
    if (window.innerWidth <= 480) {
        const navContainer = document.querySelector('.nav-container');
        const navMenu = document.querySelector('.nav-menu');

        // Create hamburger menu button
        if (!document.querySelector('.mobile-menu-toggle')) {
            const menuButton = document.createElement('button');
            menuButton.classList.add('mobile-menu-toggle');
            menuButton.innerHTML = '☰';
            menuButton.style.cssText = `
                display: block;
                background: none;
                border: none;
                font-size: 24px;
                cursor: pointer;
                color: var(--text-primary);
            `;

            menuButton.addEventListener('click', () => {
                navMenu.classList.toggle('active');
            });

            navContainer.appendChild(menuButton);
        }
    }
};

// Smooth scroll to top
const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
};

// Add scroll to top functionality to footer link
const backToTopLink = document.querySelector('.footer-links a[href="#home"]');
if (backToTopLink) {
    backToTopLink.addEventListener('click', (e) => {
        e.preventDefault();
        scrollToTop();
    });
}

// Print greeting in console
console.log('%c Welcome to Bharath Kumar Rajesh\'s Portfolio! ', 'background: #0071e3; color: white; font-size: 16px; padding: 10px;');
console.log('%c Data Engineer & AI Specialist ', 'color: #0071e3; font-size: 14px;');
