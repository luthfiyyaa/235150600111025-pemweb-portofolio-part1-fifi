// Toggle menu function
function toggleMenu() {
    const navLinks = document.getElementsByClassName("nav-links")[0]; // Access the first element
    navLinks.classList.toggle("active");
}

// Hamburger click event
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});