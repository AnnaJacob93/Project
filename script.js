document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.section');
    sections.forEach((section, index) => {
        setTimeout(() => {
            section.classList.add('visible');
        }, index * 200);
    });

    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('mouseover', () => {
            link.style.transform = 'scale(1.1)';
        });
        link.addEventListener('mouseout', () => {
            link.style.transform = 'scale(1)';
        });
    });

    const images = document.querySelectorAll('.image-container img');
    images.forEach(image => {
        image.addEventListener('mouseover', () => {
            image.style.transform = 'scale(1.05)';
        });
        image.addEventListener('mouseout', () => {
            image.style.transform = 'scale(1)';
        });
    });

    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            if (!link.href.includes('faq.html') && !link.href.includes('contact.html')) {
                event.preventDefault();
                const targetId = link.getAttribute('href').substring(1);
                const targetSection = document.getElementById(targetId);
                window.scrollTo({
                    top: targetSection.offsetTop - 50,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Contact form validation
    const contactForm = document.querySelector('form[action="/submit-contact"]');
    if (contactForm) {
        contactForm.addEventListener('submit', (event) => {
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();

            if (!name || !email || !message) {
                alert('All fields are required.');
                event.preventDefault();
            }
        });
    }
});