/* ===================================
   SUPER ANIMATED PORTFOLIO JavaScript
   With Three.js, Dark Mode & Advanced Features
   =================================== */

// ===================================
// GLOBAL VARIABLES
// ===================================
let soundEnabled = true;
const isMobile = window.innerWidth <= 768;

// ===================================
// LOADING SCREEN
// ===================================
window.addEventListener('load', () => {
    const loadingScreen = document.getElementById('loadingScreen');
    const loadingProgress = document.getElementById('loadingProgress');
    const loadingPercentage = document.getElementById('loadingPercentage');
    
    let progress = 0;
    const loadingInterval = setInterval(() => {
        progress += Math.random() * 30;
        if (progress >= 100) {
            progress = 100;
            clearInterval(loadingInterval);
            setTimeout(() => {
                loadingScreen.classList.add('hidden');
                initializeAnimations();
            }, 500);
        }
        loadingProgress.style.width = progress + '%';
        loadingPercentage.textContent = Math.floor(progress) + '%';
    }, 200);
});

// ===================================
// THREE.JS BACKGROUND
// ===================================
function initThreeJS() {
    const canvas = document.getElementById('bg-canvas');
    if (!canvas || isMobile) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    camera.position.z = 5;

    // Create particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 1000;
    const posArray = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i++) {
        posArray[i] = (Math.random() - 0.5) * 10;
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

    const particlesMaterial = new THREE.PointsMaterial({
        size: 0.02,
        color: 0x0071e3,
        transparent: true,
        opacity: 0.8
    });

    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);

    // Animation loop
    function animate() {
        requestAnimationFrame(animate);
        particlesMesh.rotation.x += 0.0001;
        particlesMesh.rotation.y += 0.0002;
        renderer.render(scene, camera);
    }

    animate();

    // Handle resize
    window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    });
}

// ===================================
// CUSTOM CURSOR
// ===================================
function initCustomCursor() {
    if (isMobile) return;

    const cursorDot = document.getElementById('cursorDot');
    const cursorOutline = document.getElementById('cursorOutline');

    document.addEventListener('mousemove', (e) => {
        cursorDot.style.left = e.clientX + 'px';
        cursorDot.style.top = e.clientY + 'px';
        cursorOutline.style.left = e.clientX + 'px';
        cursorOutline.style.top = e.clientY + 'px';
    });

    // Expand cursor on hover
    document.querySelectorAll('a, button, .card-3d').forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursorOutline.style.width = '60px';
            cursorOutline.style.height = '60px';
            cursorDot.style.transform = 'scale(2)';
        });
        el.addEventListener('mouseleave', () => {
            cursorOutline.style.width = '40px';
            cursorOutline.style.height = '40px';
            cursorDot.style.transform = 'scale(1)';
        });
    });
}

// ===================================
// SCROLL PROGRESS BAR
// ===================================
function initScrollProgress() {
    const scrollProgress = document.getElementById('scrollProgress');
    
    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrollPercent = (scrollTop / scrollHeight) * 100;
        scrollProgress.style.width = scrollPercent + '%';
    });
}

// ===================================
// DARK/LIGHT MODE TOGGLE
// ===================================
function initThemeToggle() {
    const themeToggle = document.getElementById('themeToggle');
    const html = document.documentElement;
    
    // Check for saved theme
    const savedTheme = localStorage.getItem('theme') || 'light';
    html.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);

    themeToggle.addEventListener('click', () => {
        const currentTheme = html.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        
        html.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeIcon(newTheme);
        showToast('Theme changed to ' + newTheme + ' mode');
    });
}

function updateThemeIcon(theme) {
    const icon = document.querySelector('#themeToggle i');
    icon.className = theme === 'light' ? 'fas fa-moon' : 'fas fa-sun';
}

// ===================================
// SOUND TOGGLE
// ===================================
function initSoundToggle() {
    const soundToggle = document.getElementById('soundToggle');
    
    soundToggle.addEventListener('click', () => {
        soundEnabled = !soundEnabled;
        const icon = soundToggle.querySelector('i');
        icon.className = soundEnabled ? 'fas fa-volume-up' : 'fas fa-volume-mute';
        showToast(soundEnabled ? 'Sound enabled' : 'Sound muted');
    });
}

// ===================================
// NAVIGATION
// ===================================
function initNavigation() {
    const nav = document.getElementById('mainNav');
    const navMenu = document.getElementById('navMenu');
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navLinks = document.querySelectorAll('.nav-link');

    // Scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });

    // Mobile menu toggle
    mobileMenuBtn.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        mobileMenuBtn.classList.toggle('active');
    });

    // Close menu on link click
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            mobileMenuBtn.classList.remove('active');
        });
    });

    // Smooth scroll
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const target = document.querySelector(targetId);
            if (target) {
                const navHeight = nav.offsetHeight;
                const targetPosition = target.offsetTop - navHeight;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Active link on scroll
    const sections = document.querySelectorAll('section[id]');
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
}

// ===================================
// FAB (Floating Action Button)
// ===================================
function initFAB() {
    const fabButton = document.getElementById('fabButton');
    const fabContainer = document.getElementById('fabContainer');
    const fabItems = document.querySelectorAll('.fab-item');

    fabButton.addEventListener('click', () => {
        fabContainer.classList.toggle('active');
    });

    fabItems.forEach(item => {
        item.addEventListener('click', () => {
            const action = item.getAttribute('data-action');
            handleFABAction(action);
            fabContainer.classList.remove('active');
        });
    });
}

function handleFABAction(action) {
    switch(action) {
        case 'top':
            window.scrollTo({ top: 0, behavior: 'smooth' });
            break;
        case 'share':
            if (navigator.share) {
                navigator.share({
                    title: 'Bharath Kumar Rajesh - Portfolio',
                    text: 'Check out this amazing portfolio!',
                    url: window.location.href
                });
            } else {
                showToast('Share not supported on this browser');
            }
            break;
        case 'print':
            window.print();
            break;
        case 'download':
            showToast('Resume download feature coming soon!');
            break;
    }
}

// ===================================
// ANIMATED STATS
// ===================================
function initAnimatedStats() {
    const statItems = document.querySelectorAll('.stat-item');
    const observerOptions = {
        threshold: 0.5,
        rootMargin: '0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const statItem = entry.target;
                const count = parseInt(statItem.getAttribute('data-count'));
                animateCounter(statItem, count);
                observer.unobserve(statItem);
            }
        });
    }, observerOptions);

    statItems.forEach(item => observer.observe(item));
}

function animateCounter(statItem, targetCount) {
    const statNumber = statItem.querySelector('.stat-number');
    const statProgressBar = statItem.querySelector('.stat-progress-bar');
    const isK = statNumber.textContent.includes('k');
    let current = 0;
    const increment = targetCount / 50;
    const duration = 2000;
    const stepTime = duration / 50;

    const timer = setInterval(() => {
        current += increment;
        if (current >= targetCount) {
            current = targetCount;
            clearInterval(timer);
        }

        if (isK) {
            statNumber.textContent = Math.floor(current) + 'k+';
        } else {
            statNumber.textContent = Math.floor(current) + '%';
        }
    }, stepTime);

    // Animate progress bar
    if (statProgressBar) {
        setTimeout(() => {
            statProgressBar.style.width = targetCount + '%';
        }, 100);
    }
}

// ===================================
// TYPING EFFECT
// ===================================
function initTypingEffect() {
    const typingText = document.getElementById('typingText');
    if (!typingText) return;

    const text = typingText.textContent;
    typingText.textContent = '';
    let index = 0;

    function type() {
        if (index < text.length) {
            typingText.textContent += text.charAt(index);
            index++;
            setTimeout(type, 100);
        }
    }

    setTimeout(type, 1000);
}

// ===================================
// TERMINAL TEXT ANIMATION
// ===================================
function initTerminalText() {
    const terminal = document.getElementById('terminalText');
    if (!terminal) return;

    const text = terminal.textContent;
    terminal.textContent = '';
    let i = 0;

    function typeWriter() {
        if (i < text.length) {
            terminal.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        }
    }

    setTimeout(typeWriter, 2000);
}

// ===================================
// MATRIX RAIN EFFECT
// ===================================
function initMatrixRain() {
    const canvas = document.getElementById('matrix-canvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = 200;

    const matrix = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%+-/~{[|`]}";
    const matrixArray = matrix.split("");
    const fontSize = 10;
    const columns = canvas.width / fontSize;
    const drops = [];

    for (let x = 0; x < columns; x++) {
        drops[x] = 1;
    }

    function draw() {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.04)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = '#0F0';
        ctx.font = fontSize + 'px monospace';

        for (let i = 0; i < drops.length; i++) {
            const text = matrixArray[Math.floor(Math.random() * matrixArray.length)];
            ctx.fillText(text, i * fontSize, drops[i] * fontSize);

            if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                drops[i] = 0;
            }
            drops[i]++;
        }
    }

    setInterval(draw, 35);
}

// ===================================
// SKILL BARS ANIMATION
// ===================================
function initSkillBars() {
    const skillBars = document.querySelectorAll('.skill-bar-fill');
    const observerOptions = {
        threshold: 0.5,
        rootMargin: '0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const bar = entry.target;
                const width = bar.getAttribute('data-width');
                setTimeout(() => {
                    bar.style.width = width + '%';
                }, 200);
                observer.unobserve(bar);
            }
        });
    }, observerOptions);

    skillBars.forEach(bar => observer.observe(bar));
}

// ===================================
// SCROLL ANIMATIONS
// ===================================
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
            }
        });
    }, observerOptions);

    // Observe various elements
    document.querySelectorAll('.card-3d, .experience-item, .animate-title').forEach(el => {
        observer.observe(el);
    });
}

// ===================================
// TILT EFFECT
// ===================================
function initTiltEffect() {
    if (isMobile) return;

    const tiltElements = document.querySelectorAll('.tilt-effect');

    tiltElements.forEach(element => {
        element.addEventListener('mousemove', (e) => {
            const rect = element.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;

            element.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
        });

        element.addEventListener('mouseleave', () => {
            element.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
        });
    });
}

// ===================================
// EMAIL COPY FUNCTIONALITY
// ===================================
function initEmailCopy() {
    const copyBtn = document.getElementById('copyEmailBtn');
    const emailText = document.getElementById('emailText');

    if (copyBtn && emailText) {
        copyBtn.addEventListener('click', () => {
            const email = emailText.textContent;
            navigator.clipboard.writeText(email).then(() => {
                showToast('Email copied to clipboard!');
            }).catch(() => {
                showToast('Failed to copy email');
            });
        });
    }
}

// ===================================
// TOAST NOTIFICATION
// ===================================
function showToast(message) {
    const toast = document.getElementById('toast');
    const toastMessage = document.getElementById('toastMessage');

    toastMessage.textContent = message;
    toast.classList.add('show');

    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// ===================================
// PARALLAX EFFECT
// ===================================
function initParallax() {
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const heroContent = document.querySelector('.hero-content');

        if (heroContent && scrolled < window.innerHeight) {
            heroContent.style.transform = `translateY(${scrolled * 0.5}px)`;
            heroContent.style.opacity = 1 - (scrolled / (window.innerHeight * 1.2));
        }
    });
}

// ===================================
// INITIALIZE ALL ANIMATIONS
// ===================================
function initializeAnimations() {
    initThreeJS();
    initCustomCursor();
    initScrollProgress();
    initThemeToggle();
    initSoundToggle();
    initNavigation();
    initFAB();
    initAnimatedStats();
    initTypingEffect();
    initTerminalText();
    initMatrixRain();
    initSkillBars();
    initScrollAnimations();
    initTiltEffect();
    initEmailCopy();
    initParallax();

    console.log('%c 🚀 Portfolio Loaded Successfully! ', 'background: #0071e3; color: white; font-size: 16px; padding: 10px;');
    console.log('%c 👨‍💻 Bharath Kumar Rajesh - Data Engineer & AI Specialist ', 'color: #0071e3; font-size: 14px;');
}

// ===================================
// HANDLE WINDOW RESIZE
// ===================================
window.addEventListener('resize', () => {
    const matrixCanvas = document.getElementById('matrix-canvas');
    if (matrixCanvas) {
        matrixCanvas.width = window.innerWidth;
    }
});

// Easter Egg
document.addEventListener('keydown', (e) => {
    if (e.ctrlKey && e.shiftKey && e.key === 'D') {
        showToast('🎉 You found the easter egg! Developer mode activated!');
    }
});
