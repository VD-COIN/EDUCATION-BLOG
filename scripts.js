// scripts.js

// Example of newsletter form submission handling
document.getElementById('newsletter-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent actual form submission
    alert('Thank you for subscribing to our newsletter!');
});

// Example of contact form submission handling
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent actual form submission
    alert('Your message has been sent!');
});