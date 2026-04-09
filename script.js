// Portfolio Site Scripts - script.js

// Theme Toggle
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

// Hamburger Menu
const hamburger = document.getElementById('hamburger');
const navUl = document.querySelector('nav ul');

// Only add event listeners if elements exist (for mobile devices)
if (hamburger && navUl) {
    hamburger.addEventListener('pointerdown', (e) => {
        e.preventDefault();
        hamburger.classList.toggle('active');
        navUl.classList.toggle('active');
    });
}

// Close mobile menu when clicking a link
if (hamburger && navUl) {
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navUl.classList.remove('active');
        });
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!hamburger.contains(e.target) && !navUl.contains(e.target)) {
            hamburger.classList.remove('active');
            navUl.classList.remove('active');
        }
    });
}

// Smooth scrolling for navigation links with mobile support
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            const headerOffset = window.innerWidth <= 768 ? 70 : 80; // Smaller offset on mobile
            const elementPosition = targetElement.offsetTop;
            const offsetPosition = elementPosition - headerOffset;

            // Check if smooth scrolling is supported
            if ('scrollBehavior' in document.documentElement.style) {
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            } else {
                // Fallback for older browsers
                window.scrollTo(0, offsetPosition);
            }
        }
    });
});

// Mobile-specific improvements
if ('ontouchstart' in window) {
    // Prevent double-tap zoom on buttons and links
    document.querySelectorAll('a, button, .btn').forEach(element => {
        element.addEventListener('touchstart', function(e) {
            this.style.transform = 'scale(0.98)';
        });

        element.addEventListener('touchend', function(e) {
            this.style.transform = '';
        });
    });

    // Improve touch scrolling
    document.body.style.webkitTouchCallout = 'none';
    document.body.style.webkitUserSelect = 'none';
    document.body.style.webkitTapHighlightColor = 'transparent';
}

// Handle orientation changes
window.addEventListener('orientationchange', function() {
    // Close mobile menu on orientation change
    const hamburger = document.getElementById('hamburger');
    const navUl = document.querySelector('nav ul');

    if (hamburger && navUl) {
        hamburger.classList.remove('active');
        navUl.classList.remove('active');
    }

    // Small delay to allow viewport to update
    setTimeout(() => {
        window.scrollTo(0, 0);
    }, 100);
});

// Image Modal
const imageModal = document.getElementById('imageModal');
const fullSizeImage = document.getElementById('fullSizeImage');
const closeImageModal = document.getElementById('closeImageModal');

function openImageModal(imageSrc) {
    fullSizeImage.src = imageSrc;
    imageModal.style.display = 'block';
}

closeImageModal.addEventListener('click', () => {
    imageModal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target === imageModal) {
        imageModal.style.display = 'none';
    }
});

// Blog Modal
const blogModal = document.getElementById('blogModal');
const blogPostContent = document.getElementById('blogPostContent');
const closeBlogModal = document.getElementById('closeBlogModal');

const blogPosts = {
    1: {
        title: "Why Your Business Needs a Professional Website in 2025",
        date: "Jan 15, 2025",
        readTime: "5 min read",
        content: `
            <h2>Why Your Business Needs a Professional Website in 2025</h2>
            <div class="blog-meta">
                <span class="blog-date">📅 Jan 15, 2025</span>
                <span class="blog-read-time">⏱️ 5 min read</span>
            </div>

            <p>In today's hyper-connected world, your business website serves as the digital storefront that never closes. It's often the first impression potential customers have of your brand, and in 2025, having a professional website is no longer optional—it's essential for survival.</p>

            <h3>The Digital Transformation Reality</h3>
            <p>According to recent studies, businesses with professional websites generate 3x more leads than those without. In Kenya, where mobile internet penetration has reached over 90%, your website is your 24/7 salesperson, marketing team, and customer service representative all rolled into one.</p>

            <h3>Key Benefits of a Professional Website</h3>
            <ul>
                <li><strong>Credibility and Trust:</strong> A well-designed website instantly builds trust with your audience</li>
                <li><strong>Increased Visibility:</strong> Better SEO means more potential customers finding you</li>
                <li><strong>Lead Generation:</strong> Effective websites convert visitors into customers</li>
                <li><strong>Competitive Advantage:</strong> Stand out in your market with professional presentation</li>
                <li><strong>Scalability:</strong> Easy to update and expand as your business grows</li>
            </ul>

            <h3>What Makes a Website "Professional"?</h3>
            <p>A professional website combines technical excellence with user experience. It loads quickly, works perfectly on mobile devices, provides clear navigation, and most importantly, converts visitors into customers.</p>

            <p>Ready to take your business online? Let's create a website that works as hard as you do.</p>
        `
    },
    2: {
        title: "Mobile-First Design: Why It Matters for Kenyan Businesses",
        date: "Dec 22, 2024",
        readTime: "4 min read",
        content: `
            <h2>Mobile-First Design: Why It Matters for Kenyan Businesses</h2>
            <div class="blog-meta">
                <span class="blog-date">📅 Dec 22, 2024</span>
                <span class="blog-read-time">⏱️ 4 min read</span>
            </div>

            <p>With over 90% of internet users in Kenya accessing websites via mobile devices, mobile-first design isn't just a trend—it's a business necessity. Understanding this shift can make or break your online success.</p>

            <h3>The Mobile Revolution in Kenya</h3>
            <p>According to the Communications Authority of Kenya, mobile data subscriptions have grown exponentially, with smartphone usage dominating internet access. Your potential customers are browsing on phones while commuting, during lunch breaks, or relaxing at home.</p>

            <h3>Why Mobile-First Matters</h3>
            <ul>
                <li><strong>User Experience:</strong> Mobile-optimized sites provide better user experience</li>
                <li><strong>Google Ranking:</strong> Mobile-friendliness is a ranking factor</li>
                <li><strong>Conversion Rates:</strong> Better mobile UX leads to higher conversions</li>
                <li><strong>Loading Speed:</strong> Mobile users expect fast-loading websites</li>
            </ul>

            <h3>Mobile-First vs Mobile-Responsive</h3>
            <p>Mobile-first design starts with the mobile experience and builds up, while mobile-responsive starts desktop and scales down. In Kenya's mobile-dominated market, mobile-first is the smarter approach.</p>

            <p>Don't lose customers because your website isn't mobile-ready. Let's build a website that works perfectly for your Kenyan audience.</p>
        `
    },
    3: {
        title: "E-commerce Success Stories: Local Kenyan Businesses Going Digital",
        date: "Nov 30, 2024",
        readTime: "6 min read",
        content: `
            <h2>E-commerce Success Stories: Local Kenyan Businesses Going Digital</h2>
            <div class="blog-meta">
                <span class="blog-date">📅 Nov 30, 2024</span>
                <span class="blog-read-time">⏱️ 6 min read</span>
            </div>

            <p>The e-commerce revolution is transforming Kenyan businesses. From small boutique shops to large retailers, entrepreneurs are discovering the power of online selling. Here are inspiring success stories that prove digital transformation works.</p>

            <h3>The Rise of Online Retail in Kenya</h3>
            <p>With the growth of platforms like Jumia and Kilimall, and increased internet penetration, Kenyan consumers are increasingly shopping online. Smart businesses are meeting this demand with professional e-commerce websites.</p>

            <h3>Success Story: Fashion Boutique</h3>
            <p>Maish Fashion Boutique transformed from a single physical store to a thriving online business. Their professional e-commerce website now serves customers across Kenya, with sales increasing by 300% in the first year.</p>

            <h3>Key Success Factors</h3>
            <ul>
                <li><strong>Professional Design:</strong> Clean, modern websites that build trust</li>
                <li><strong>Mobile Optimization:</strong> Seamless shopping on all devices</li>
                <li><strong>Secure Payments:</strong> M-Pesa integration and secure checkout</li>
                <li><strong>Fast Shipping:</strong> Reliable delivery partnerships</li>
                <li><strong>Customer Service:</strong> Responsive support and easy returns</li>
            </ul>

            <h3>The Technology Advantage</h3>
            <p>Modern e-commerce platforms offer inventory management, customer analytics, and marketing tools that give Kenyan businesses a competitive edge in the global marketplace.</p>

            <p>Your e-commerce success story could be next. Let's build the online store your customers are waiting for.</p>
        `
    }
};

function showBlogPost(postId) {
    const post = blogPosts[postId];
    if (post) {
        blogPostContent.innerHTML = post.content;
        blogModal.style.display = 'block';
    }
}

closeBlogModal.addEventListener('click', () => {
    blogModal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target === blogModal) {
        blogModal.style.display = 'none';
    }
});

// CV Modal
const cvModal = document.getElementById('cvModal');
const viewCVBtn = document.getElementById('viewCVBtn');
const closeCVModal = document.getElementById('closeCVModal');
const downloadCVBtn = document.getElementById('downloadCVBtn');
const printCVBtn = document.getElementById('printCVBtn');

viewCVBtn.addEventListener('click', () => {
    cvModal.style.display = 'block';
});

closeCVModal.addEventListener('click', () => {
    cvModal.style.display = 'none';
});

downloadCVBtn.addEventListener('click', () => {
    // Create a downloadable PDF version
    const cvContent = document.querySelector('.cv-modal-content').innerHTML;
    const printWindow = window.open('', '_blank');
    printWindow.document.write(`
        <html>
        <head>
        <title>Roy Nyamawi Sanga - CV</title>
        <style>
        body { font-family: Arial, sans-serif; margin: 40px; color: #333; }
        h2 { color: #6e45e2; border-bottom: 2px solid #6e45e2; padding-bottom: 10px; }
        h3 { color: #ff6b6b; margin-top: 30px; }
        h4 { color: #88d3ce; margin-bottom: 5px; }
        .cv-subtitle { color: #666; font-size: 0.9em; }
        ul { padding-left: 20px; }
        li { margin-bottom: 8px; }
        a { color: #6e45e2; text-decoration: none; }
        .cv-actions { display: none; }
        .close { display: none; }
        </style>
        </head>
        <body>
        ${cvContent}
        </body>
        </html>
    `);
    printWindow.document.close();
    printWindow.print();
});

printCVBtn.addEventListener('click', () => {
    window.print();
});

window.addEventListener('click', (e) => {
    if (e.target === cvModal) {
        cvModal.style.display = 'none';
    }
});

// Modern mouse interactions and creative effects
const galleryItems = document.querySelectorAll('.gallery-item');

// Gallery hover effects with staggered animations
galleryItems.forEach((item, index) => {
    item.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.05) translateY(-5px)';
        this.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
    });

    item.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1) translateY(0)';
    });
});

// Modern tilt and magnetic effects for interactive elements
const interactiveElements = document.querySelectorAll('.project-card, .blog-card, .skill-card, .gallery-item');

interactiveElements.forEach(element => {
    element.addEventListener('mousemove', function(e) {
        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        // Subtle 3D tilt effect
        const tiltX = y * 0.01;
        const tiltY = -x * 0.01;

        this.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) translateZ(10px)`;
    });

    element.addEventListener('mouseleave', function() {
        this.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)';
        this.style.transition = 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
    });
});

// Magnetic effect for buttons
const magneticButtons = document.querySelectorAll('.btn');

magneticButtons.forEach(button => {
    button.addEventListener('mousemove', function(e) {
        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        this.style.transform = `translate(${x * 0.08}px, ${y * 0.08}px) scale(1.02)`;
    });

    button.addEventListener('mouseleave', function() {
        this.style.transform = 'translate(0, 0) scale(1)';
        this.style.transition = 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)';
    });
});

// Subtle scroll-triggered animations
let scrollTimeout;
const throttledScroll = () => {
    if (!scrollTimeout) {
        scrollTimeout = setTimeout(() => {
            const scrolled = window.pageYOffset;
            const rate = scrolled * -0.2;

            // Very subtle parallax effect
            const hero = document.querySelector('.hero');
            if (hero && scrolled < window.innerHeight) {
                hero.style.transform = `translateY(${rate * 0.05}px)`;
            }

            scrollTimeout = null;
        }, 32); // ~30fps for stability
    }
};

window.addEventListener('scroll', throttledScroll, { passive: true });

// Interactive particle system for hero
const createParticles = () => {
    const heroSection = document.querySelector('.hero');
    if (!heroSection) return;

    for (let i = 0; i < 30; i++) {
        const particle = document.createElement('div');
        particle.className = 'hero-particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 15 + 's';
        particle.style.animationDuration = (Math.random() * 15 + 15) + 's';
        heroSection.appendChild(particle);
    }
};

// Animate progress bars when they come into view
const animateProgressBars = () => {
    const progressBars = document.querySelectorAll('.progress-bar');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const bar = entry.target;
                const width = bar.style.width;
                bar.style.setProperty('--progress-width', width);
                bar.classList.add('animate');
            }
        });
    }, { threshold: 0.5 });

    progressBars.forEach(bar => observer.observe(bar));
};

// Initialize effects
document.addEventListener('DOMContentLoaded', () => {
    createParticles();
    animateProgressBars();
});

// Modern custom cursor with trailing effect - only on desktop
if (!('ontouchstart' in window)) {
    const trailLength = 8; // Number of trail elements
    const cursors = [];
    const mouseHistory = [];

    // Create main cursor and trail elements
    for (let i = 0; i < trailLength; i++) {
        const cursorElement = document.createElement('div');
        cursorElement.className = `custom-cursor cursor-trail trail-${i}`;
        cursorElement.style.left = '50px';
        cursorElement.style.top = '50px';
        cursorElement.style.opacity = (1 - i * 0.1).toString(); // Fade out trail
        cursorElement.style.zIndex = (9999 - i).toString();
        document.body.appendChild(cursorElement);
        cursors.push(cursorElement);

        // Initialize mouse history
        mouseHistory.push({ x: 50, y: 50 });
    }

    // Force show main cursor initially
    cursors[0].style.background = 'red';
    cursors[0].style.width = '30px';
    cursors[0].style.height = '30px';
    setTimeout(() => {
        cursors[0].style.background = 'var(--primary)';
        cursors[0].style.width = '20px';
        cursors[0].style.height = '20px';
    }, 3000);

    let mouseX = 0;
    let mouseY = 0;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;

        // Add current mouse position to history
        mouseHistory.unshift({ x: mouseX, y: mouseY });

        // Keep only the required history length
        if (mouseHistory.length > trailLength) {
            mouseHistory.pop();
        }
    });

    // Smooth cursor trail following with easing
    const updateCursorTrail = () => {
        for (let i = 0; i < cursors.length; i++) {
            const cursor = cursors[i];
            const targetPos = mouseHistory[Math.min(i * 2, mouseHistory.length - 1)] || { x: 50, y: 50 };

            // Different easing for each trail element
            const easing = 0.15 - (i * 0.015); // Slower for trailing elements
            const currentX = parseFloat(cursor.style.left) || 50;
            const currentY = parseFloat(cursor.style.top) || 50;

            const newX = currentX + (targetPos.x - currentX) * easing;
            const newY = currentY + (targetPos.y - currentY) * easing;

            cursor.style.left = Math.round(newX) + 'px';
            cursor.style.top = Math.round(newY) + 'px';

            // Dynamic sizing based on speed
            const speed = Math.abs(targetPos.x - currentX) + Math.abs(targetPos.y - currentY);
            const sizeMultiplier = Math.min(speed * 0.02 + 1, 1.5);
            const baseSize = 20 - (i * 2); // Smaller for trailing elements
            const newSize = Math.max(baseSize * sizeMultiplier, 5);

            cursor.style.width = newSize + 'px';
            cursor.style.height = newSize + 'px';
        }

        requestAnimationFrame(updateCursorTrail);
    };

    // Start cursor trail update loop
    updateCursorTrail();

    // Debug: Make sure cursors are visible
    console.log('Custom cursors created:', cursors.length);

    // Test cursor trail visibility - make all trail elements temporarily visible
    setTimeout(() => {
        cursors.forEach((cursor, index) => {
            cursor.style.background = index === 0 ? 'red' : `hsl(${index * 45}, 100%, 50%)`;
            cursor.style.width = (30 - index * 2) + 'px';
            cursor.style.height = (30 - index * 2) + 'px';
            cursor.style.opacity = '0.8';
        });

        setTimeout(() => {
            cursors.forEach((cursor, index) => {
                cursor.style.background = index === 0 ? 'var(--primary)' : `rgba(110, 69, 226, ${0.8 - index * 0.1})`;
                cursor.style.width = (20 - index * 2) + 'px';
                cursor.style.height = (20 - index * 2) + 'px';
                cursor.style.opacity = (1 - index * 0.1).toString();
            });
        }, 2000);
    }, 1000);

    // Cursor interactions - only affect main cursor
    document.addEventListener('mousedown', () => {
        cursors[0].classList.add('click');
    });

    document.addEventListener('mouseup', () => {
        cursors[0].classList.remove('click');
    });

    document.addEventListener('mouseenter', () => {
        cursors.forEach(cursor => cursor.style.opacity = '1');
    }, true);

    document.addEventListener('mouseleave', () => {
        cursors.forEach(cursor => cursor.style.opacity = '0');
    }, true);

    // Enhanced hover effects for interactive elements - only main cursor
    const cursorInteractiveElements = document.querySelectorAll('a, button, .btn, .gallery-item, .project-card, .blog-card, .skill-card, input, textarea');

    cursorInteractiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursors[0].classList.add('hover');
            // Add glow effect to trail cursors on hover
            for (let i = 1; i < Math.min(4, cursors.length); i++) {
                cursors[i].style.boxShadow = '0 0 10px rgba(255, 107, 107, 0.3)';
            }
        });

        el.addEventListener('mouseleave', () => {
            cursors[0].classList.remove('hover');
            // Remove glow effect from trail cursors
            for (let i = 1; i < cursors.length; i++) {
                cursors[i].style.boxShadow = 'none';
            }
        });
    });

    // Creative click ripple effect with enhanced trail interaction
    document.addEventListener('click', (e) => {
        const ripple = document.createElement('div');
        ripple.className = 'click-ripple';
        ripple.style.left = e.clientX + 'px';
        ripple.style.top = e.clientY + 'px';
        document.body.appendChild(ripple);

        // Create additional ripple effects for trail cursors
        for (let i = 0; i < Math.min(3, cursors.length); i++) {
            setTimeout(() => {
                const trailRipple = document.createElement('div');
                trailRipple.className = 'click-ripple trail-ripple';
                trailRipple.style.left = e.clientX + (Math.random() - 0.5) * 20 + 'px';
                trailRipple.style.top = e.clientY + (Math.random() - 0.5) * 20 + 'px';
                trailRipple.style.opacity = (0.5 - i * 0.15).toString();
                document.body.appendChild(trailRipple);

                setTimeout(() => {
                    trailRipple.remove();
                }, 400);
            }, i * 50);
        }

        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
}

if (localStorage.getItem('theme') === 'light') {
    body.classList.add('light-mode');
    themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
}

themeToggle.addEventListener('click', () => {
    body.classList.toggle('light-mode');
    if (body.classList.contains('light-mode')) {
        localStorage.setItem('theme', 'light');
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    } else {
        localStorage.setItem('theme', 'dark');
        themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    }
});



// Scroll to Top
const scrollTopBtn = document.getElementById('scrollTop');
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollTopBtn.classList.add('show');
    } else {
        scrollTopBtn.classList.remove('show');
    }
});
scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Support Modal
const footerSupportBtn = document.getElementById('footerSupportBtn');
const supportModal = document.getElementById('supportModal');
const closeModal = document.getElementById('closeModal');
const donationOptions = document.querySelectorAll('.donation-option');
const copyBtns = document.querySelectorAll('.copy-btn');
const thankYouMessage = document.getElementById('thankYouMessage');

if (footerSupportBtn) {
    footerSupportBtn.addEventListener('pointerdown', (e) => {
        e.preventDefault();
        supportModal.classList.add('active');
    });
}

if (closeModal) {
    closeModal.addEventListener('pointerdown', (e) => {
        e.preventDefault();
        supportModal.classList.remove('active');
    });
}

donationOptions.forEach(option => {
    option.addEventListener('click', () => {
        donationOptions.forEach(opt => opt.classList.remove('active'));
        option.classList.add('active');
    });
});

copyBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const number = btn.getAttribute('data-number');
        navigator.clipboard.writeText(number);
        btn.textContent = 'Copied!';
        setTimeout(() => {
            btn.textContent = 'Copy';
        }, 2000);
    });
});

window.addEventListener('click', (e) => {
    if (e.target === supportModal) {
        supportModal.classList.remove('active');
    }
});

// AI Assistant
const aiBtn = document.getElementById('aiBtn');
const aiChatbox = document.getElementById('aiChatbox');
const chatMessages = document.getElementById('chatMessages');
const userInput = document.getElementById('userInput');
const sendMessage = document.getElementById('sendMessage');
aiBtn.addEventListener('pointerdown', (e) => {
    e.preventDefault();
    aiChatbox.classList.toggle('active');
});
function addMessage(text, isUser = false) {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message');
    messageDiv.classList.add(isUser ? 'user' : 'ai');
    messageDiv.textContent = text;
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}
function aiResponse(userMessage) {
    userMessage = userMessage.toLowerCase();
    if (userMessage.includes('hello') || userMessage.includes('hi') || userMessage.includes('hey')) {                        
        addMessage("Hello there! How can I assist you today? 😊");
    } else if (userMessage.includes('service') || userMessage.includes('offer')) {
        addMessage("Roy offers web design, front-end development, UI/UX design, and website maintenance services. He specializes in creating responsive, user-friendly websites with modern technologies.");
    } else if (userMessage.includes('contact') || userMessage.includes('reach') || userMessage.includes('number')) {
        addMessage("You can contact Roy via email at roysanga127@gmail.com or leeweb7315@gmail.com. You can also call him at +254 740 297 140 or +254 706 573 493. His social media links are in the contact section!");
    } else if (userMessage.includes('skill') || userMessage.includes('expert')) {
        addMessage("Roy specializes in HTML5, CSS3, JavaScript, React.js, responsive design, UI/UX design, and performance optimization. Check out the skills section for more details!");
    } else if (userMessage.includes('project') || userMessage.includes('work')) {
        addMessage("Roy has completed over 10 projects including e-commerce platforms, blogs, and web applications. You can see some examples in the projects section of this portfolio.");
    } else if (userMessage.includes('hire') || userMessage.includes('avail')) {
        addMessage("Roy is currently available for freelance projects and full-time opportunities. You can reach out via the contact form or directly through his contact information. He typically responds within 24 hours.");
    } else if (userMessage.includes('support') || userMessage.includes('donate')) {
        addMessage("If you'd like to support Roy's work, click the 'Support My Work' button in the bottom left corner. You can choose an amount and send via M-Pesa or other payment methods. Every contribution is greatly appreciated!");
    } else {
        addMessage("I'm sorry, I didn't quite understand that. Could you rephrase your question? You can ask about Roy's services, skills, availability, or how to contact him.");
    }
}
sendMessage.addEventListener('click', () => {
    const message = userInput.value.trim();
    if (message) {
        addMessage(message, true);
        userInput.value = '';
        setTimeout(() => {
            aiResponse(message);
        }, 1000);
    }
});
userInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        sendMessage.click();
    }
});
// Form validation and submission
const contactForm = document.getElementById('contactForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');

function showError(input, message) {
    const formGroup = input.parentElement;
    let error = formGroup.querySelector('.error-message');
    if (!error) {
        error = document.createElement('div');
        error.className = 'error-message';
        error.style.color = 'var(--accent)';
        error.style['font-size'] = '0.9rem';
        error.style['margin-top'] = '5px';
        formGroup.appendChild(error);
    }
    error.textContent = message;
    input.style.borderColor = 'var(--accent)';
}

function hideError(input) {
    const formGroup = input.parentElement;
    const error = formGroup.querySelector('.error-message');
    if (error) {
        error.remove();
    }
    input.style.borderColor = '';
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

if (contactForm) {
    [nameInput, emailInput, messageInput].forEach(input => {
        input.addEventListener('blur', () => {
            if (input.value.trim() === '') {
                showError(input, `${input.placeholder} is required`);
            } else {
                hideError(input);
                if (input === emailInput && !validateEmail(input.value)) {
                    showError(input, 'Please enter a valid email');
                }
            }
        });
    });


}
// Project Modal
const projectModal = document.getElementById('projectModal');
const modalContent = document.getElementById('modalContent');
const closeModalBtn = document.getElementById('closeModal');

document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', function() {
        const title = this.querySelector('h3').textContent;
        const description = this.querySelector('p').textContent;
        const tags = this.querySelector('.project-tags').innerHTML;
        const img = this.querySelector('.project-img').style.backgroundImage;

        modalContent.innerHTML = `
            <h2>${title}</h2>
            <div style="background-image: ${img}; height: 300px; background-size: cover; background-position: center; margin: 20px 0; border-radius: 10px;"></div>
            <p>${description}</p>
            <div class="project-tags">${tags}</div>
            <a href="#" class="btn btn-primary">View Live Demo</a>
        `;
        projectModal.style.display = 'block';
    });
});

closeModalBtn.addEventListener('click', () => {
    projectModal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target === projectModal) {
        projectModal.style.display = 'none';
    }
});

// Smooth scrolling for navigation
const anchors = document.querySelectorAll('a[href^="#"]');
anchors.forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
