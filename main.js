// File: main.js
document.addEventListener('DOMContentLoaded', () => {
    console.log('Document loaded and ready!');
});

function toggleMenu() {
    const navLinks = document.getElementById('nav-links');
    navLinks.classList.toggle('active');
}
