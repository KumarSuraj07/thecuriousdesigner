// Boy Character Interaction
const boyCharacter = document.querySelector('.boy-character');
const speechBubble = document.querySelector('.speech-bubble');

const messages = [
    "Hi there!",
    "Welcome to my portfolio!",
    "Feel free to explore!",
    "Need help? Just ask!",
    "Have a great day!"
];

let currentMessageIndex = 0;

boyCharacter.addEventListener('click', () => {
    currentMessageIndex = (currentMessageIndex + 1) % messages.length;
    
    // Add wave animation to the speech bubble
    speechBubble.style.animation = 'none';
    speechBubble.offsetHeight; // Trigger reflow
    speechBubble.style.animation = 'fadeIn 0.5s ease forwards';
    
    // Update the message
    speechBubble.textContent = messages[currentMessageIndex];
    
    // Add bounce effect to the boy character
    boyCharacter.style.transform = 'scale(0.9)';
    setTimeout(() => {
        boyCharacter.style.transform = 'scale(1)';
    }, 150);
});

// Hide boy character when scrolling down, show when scrolling up
let lastScrollPosition = window.pageYOffset;
let isHidden = false;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > lastScrollPosition && !isHidden && currentScroll > 200) {
        // Scrolling down - hide the boy
        boyCharacter.style.transform = 'translateX(-150px)';
        isHidden = true;
    } else if (currentScroll < lastScrollPosition && isHidden) {
        // Scrolling up - show the boy
        boyCharacter.style.transform = 'translateX(0)';
        isHidden = false;
    }
    
    lastScrollPosition = currentScroll;
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Navbar scroll effect
const navbar = document.querySelector('.navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        navbar.style.boxShadow = 'none';
    } else {
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }
    
    lastScroll = currentScroll;
});

// Animate elements when they come into view
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.portfolio-item, .service-card, .skill');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;
        
        if (elementTop < window.innerHeight && elementBottom > 0) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
};

// Initial setup for scroll animations
document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.portfolio-item, .service-card, .skill');
    
    elements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'all 0.6s ease-out';
    });
    
    animateOnScroll();
});

window.addEventListener('scroll', animateOnScroll);

// Form submission handling
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Add animation to button
        const submitBtn = contactForm.querySelector('.submit-btn');
        submitBtn.style.transform = 'scale(0.95)';
        setTimeout(() => {
            submitBtn.style.transform = 'scale(1)';
        }, 100);
        
        // Here you would typically handle the form submission
        // For now, we'll just show an alert
        alert('Thank you for your message! I will get back to you soon.');
        contactForm.reset();
    });
}

// Skill bars animation
const animateSkills = () => {
    const skills = document.querySelectorAll('.progress');
    skills.forEach(skill => {
        const width = skill.style.width;
        skill.style.width = '0';
        setTimeout(() => {
            skill.style.width = width;
        }, 100);
    });
};

// Trigger skill animation when the about section is in view
const aboutSection = document.querySelector('.about');
if (aboutSection) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateSkills();
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    observer.observe(aboutSection);
}

// Portfolio hover effect
const portfolioItems = document.querySelectorAll('.portfolio-item');
portfolioItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.style.transform = 'scale(1.02)';
    });
    
    item.addEventListener('mouseleave', () => {
        item.style.transform = 'scale(1)';
    });
});