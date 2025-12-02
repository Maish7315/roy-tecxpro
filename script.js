// Portfolio Site Scripts - script.js

// Theme Toggle
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

// Hamburger Menu
const hamburger = document.getElementById('hamburger');
const navUl = document.querySelector('nav ul');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navUl.classList.toggle('active');
});

// Close mobile menu when clicking a link
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

// Kaleidoscope Gallery - Cycle through images on hover and make clickable
const kaleidoscopeCard = document.getElementById('kaleidoscopeCard');
const kaleidoscopeImages = document.querySelectorAll('.kaleidoscope-image');
let hoverImageIndex = 0;

kaleidoscopeCard.addEventListener('mouseenter', function() {
    // Remove show-on-hover class from all images
    kaleidoscopeImages.forEach(img => img.classList.remove('show-on-hover'));

    // Add show-on-hover class to current image
    kaleidoscopeImages[hoverImageIndex].classList.add('show-on-hover');

    // Cycle to next image for next hover
    hoverImageIndex = (hoverImageIndex + 1) % kaleidoscopeImages.length;
});

kaleidoscopeCard.addEventListener('click', function() {
    openImageModal('assets/_DSC3410.jpg');
});

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

// Particles Background
particlesJS('particles-js', {
    particles: {
        number: { value: 80, density: { enable: true, value_area: 800 } },
        color: { value: "#6e45e2" },
        shape: { type: "circle" },
        opacity: { value: 0.5, random: true },
        size: { value: 3, random: true },
        line_linked: {
            enable: true,
            distance: 150,
            color: "#88d3ce",
            opacity: 0.3,
            width: 1
        },
        move: {
            enable: true,
            speed: 2,
            direction: "none",
            random: true,
            straight: false,
            out_mode: "out",
            bounce: false
        }
    },
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: { enable: true, mode: "repulse" },
            onclick: { enable: true, mode: "push" },
            resize: true
        }
    },
    retina_detect: true
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
const supportBtn = document.getElementById('supportBtn');
const supportModal = document.getElementById('supportModal');
const closeModal = document.getElementById('closeModal');
const donationOptions = document.querySelectorAll('.donation-option');
const copyBtns = document.querySelectorAll('.copy-btn');
const confirmDonation = document.getElementById('confirmDonation');
const thankYouMessage = document.getElementById('thankYouMessage');

supportBtn.addEventListener('click', () => {
    supportModal.classList.add('active');
});
closeModal.addEventListener('click', () => {
    supportModal.classList.remove('active');
});
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
confirmDonation.addEventListener('click', () => {
    thankYouMessage.style.display = 'block';
    setTimeout(() => {
        supportModal.classList.remove('active');
        thankYouMessage.style.display = 'none';
    }, 3000);
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
aiBtn.addEventListener('click', () => {
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

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        let isValid = true;

        if (nameInput.value.trim() === '') {
            showError(nameInput, 'Name is required');
            isValid = false;
        }
        if (emailInput.value.trim() === '') {
            showError(emailInput, 'Email is required');
            isValid = false;
        } else if (!validateEmail(emailInput.value)) {
            showError(emailInput, 'Please enter a valid email');
            isValid = false;
        }
        if (messageInput.value.trim() === '') {
            showError(messageInput, 'Message is required');
            isValid = false;
        }

        if (isValid) {
            // Success animation
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            submitBtn.textContent = 'Sending...';
            submitBtn.disabled = true;

            // Simulate sending (replace with actual EmailJS call)
            setTimeout(() => {
                alert('Thank you for your message! Roy will get back to you soon.');
                contactForm.reset();
                submitBtn.textContent = 'Send Message';
                submitBtn.disabled = false;
                [nameInput, emailInput, messageInput].forEach(hideError);
            }, 2000);
        }
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
