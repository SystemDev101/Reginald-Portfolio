document.addEventListener('DOMContentLoaded', function () {
    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Burger Menu Functionality
    const burger = document.getElementById('burger');
    const navLinks = document.getElementById('navLinks');

    burger.addEventListener('click', () => {
        // Toggle Nav
        navLinks.classList.toggle('active');

        // Burger Animation
        burger.classList.toggle('toggle');
    });

    // Close menu when clicking on a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            burger.classList.remove('toggle');
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.navbar') && navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
            burger.classList.remove('toggle');
        }
    });

    // Intersection Observer for animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1
    });

    document.querySelectorAll('.animate').forEach((element) => {
        observer.observe(element);
    });

    // Resume download
    document.getElementById('downloadResume').addEventListener('click', function () {
        // Replace with actual resume download logic
        const link = document.createElement('a');
        link.href = 'https://drive.google.com/file/d/12QajZBx4LjdaL9IMlDVeLtL9IauCknVs/view?usp=drivesdk';
        link.download = 'Reginald_Resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });

    // Service WhatsApp message function (for both main and service pages)
    function sendServiceMessage(serviceType) {
        // Encode the message for WhatsApp
        const message = encodeURIComponent(
            `Hello Reginald,\n\nI'm interested in your ${serviceType} service.\n\n` +
            `Please provide more details about:\n` +
            `- Project requirements\n` +
            `- Timeline\n` +
            `- Pricing\n\n` +
            `Best regards,\n[Your Name]`
        );

        // Replace with your actual WhatsApp number (with country code, no spaces/special characters)
        const whatsappNumber = '1234567890'; // EXAMPLE: '15551234567'

        // Open WhatsApp with pre-filled message
        window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
    }

    // For service selection buttons on detail pages
    document.querySelectorAll('.select-service').forEach(button => {
        button.addEventListener('click', function () {
            const serviceType = this.getAttribute('data-service');
            sendServiceMessage(serviceType);
        });
    });
});